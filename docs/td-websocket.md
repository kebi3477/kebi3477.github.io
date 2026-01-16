# TouchDesigner ← Electron(WebSocket) 연동 가이드

이 문서는 Electron(또는 로컬 앱)에서 열어둔 WebSocket 서버(ws://127.0.0.1:<http-port>/ws)로부터 JSON 포맷의 pose 데이터를 받아 TouchDesigner(TD)에서 x,y 채널로 변환하는 단계별 가이드입니다.

전제
- Electron이 `ws://127.0.0.1:<http-port>/ws`로 WebSocket을 제공하고, 다음과 같은 JSON 문자열을 전송합니다:
  - 예: `{"type":"pose","x":-0.2345,"y":0.1234,"ts":1670000000000}`

요약
- TD에서 받을 방법: DAT → WebSocket DAT (Client 모드) → DAT Execute DAT(onReceiveText)로 JSON 파싱 → Table DAT에 x,y 쓰기 → DAT to CHOP 또는 Script CHOP으로 채널화

1) WebSocket DAT 생성

- TD의 Network 안에서: 오른쪽 클릭 → DAT → WebSocket DAT 선택
- 생성 후 파라미터:
  - `Mode`: Client
  - `Address`: `127.0.0.1`
  - `Port`: HTTP 서버 포트 (예: `8089`) — 경로는 `/ws` 로 연결하세요
  - `Use Secure`: 체크 해제 (ws)
  - `Active`: 체크하여 연결 시도
  - `Reconnect`: 체크 추천 (자동 재접속)

- 연결 확인:
  - `WebSocket DAT`의 `Status` 필드가 `Connected`로 바뀌는지 확인.
  - 혹은 DAT의 텍스트 탭에 접속/수신 로그가 찍히는지 확인.

2) JSON을 x/y 채널로 뽑는 방법 (방법 A: DAT Execute 사용)

- 워크플로우: `WebSocket DAT` → `DAT Execute DAT` → `Table DAT` → `DAT to CHOP`

- A-1 DAT Execute 설정
  1. `DAT Execute DAT`을 생성하고 `WebSocket DAT`를 파라미터 `DAT` 항목에 연결합니다.
  2. `Callbacks`에서 `onReceiveText`를 활성화합니다.
  3. `onReceiveText` 콜백에 다음 Python 코드를 넣습니다 (복붙 가능):

```python
def onReceiveText(dat, rowIndex, message, bytes, peer):
    import json
    try:
        j = json.loads(message)
    except Exception as e:
        return
    # j should contain keys 'x' and 'y'
    x = j.get('x')
    y = j.get('y')
    # write to a table DAT (create or reference one)
    tbl = op('pose_table')
    if not tbl:
        tbl = op('/project1').create(tableDAT, 'pose_table')
        tbl.clear()
        tbl.appendRow(['x','y','ts'])
    # overwrite 2nd row with latest values
    if tbl.numRows < 2:
        tbl.appendRow([str(x), str(y), str(j.get('ts',''))])
    else:
        tbl[1,0] = str(x)
        tbl[1,1] = str(y)
        tbl[1,2] = str(j.get('ts',''))
    return

```

  - 위 코드는 `pose_table`이라는 Table DAT을 생성하거나(없으면) 참조하여 최신 x,y,ts를 2행에 저장합니다.

- A-2 Table DAT → DAT to CHOP
  - `pose_table`을 선택한 뒤 `DAT to CHOP`을 만들어 연결합니다.
  - `DAT to CHOP`의 `Convert` 또는 `First Row/Column` 설정을 통해 첫 행을 label로, 두번째 행을 값으로 변환합니다.
  - 결과로 생성된 CHOP 채널에 `x`와 `y`가 채널로 생깁니다.

3) 방법 B: Script CHOP 또는 직접 스크립트로 채널 만들기

- 간단한 Script CHOP 예시 (Python):

```python
def onCook(scriptOp):
    tbl = op('pose_table')
    if not tbl or tbl.numRows < 2:
        scriptOp.clear()
        return
    try:
        x = float(tbl[1,0].val)
        y = float(tbl[1,1].val)
    except:
        x = 0.0
        y = 0.0
    scriptOp.clear()
    ch1 = scriptOp.appendChan('x')
    ch2 = scriptOp.appendChan('y')
    ch1[0] = x
    ch2[0] = y
    return
```

4) 예: 다른 네트워크에서 사용하기

- 위에서 만든 CHOP(예: `pose_chop`)은 `Null CHOP`으로 마무리하고, 다른 네트워크에서 `fetch()` 또는 `Export CHOP`을 통해 사용하세요.

5) 트러블슈팅

- 포트 충돌: 이미 7000 포트를 사용하는 다른 프로세스가 있으면 Electron에서 바인딩 실패.
  - 해결: Electron 측 포트 변경하거나 TD의 `Port`를 서버에 맞게 변경.
- 방화벽: 로컬방화벽이 블록하는지 확인 (macOS의 경우 시스템 환경설정 → 보안 및 개인정보 보호).
- WebSocket 연결 실패 시 확인 포인트:
  - Electron 앱이 실제로 서버를 열었는지 확인 (로그 또는 netstat).
  - TD에서 `WebSocket DAT`의 `Active`가 체크되어 있는지 확인.
  - TD의 `WebSocket DAT`에서 `Status` 메시지 및 `Errors` 확인.
- 데이터가 오지 않는 경우:
  - Electron에서 보내는 메시지가 올바른 JSON인지 확인 (터미널 로그 혹은 TD의 메시지 탭).
  - TD에서 `DAT Execute`의 `onReceiveText`가 활성화되어 있는지 확인.

6) 구조 설명 (서버/클라이언트 역할)

- 권장(본 구현): Electron이 WebSocket 서버를 열고(TD는 클라이언트로 붙음)
  - 장점: TouchDesigner는 간단히 Client로 붙기만 하면 되므로 편리
  - TD에서의 설정: `WebSocket DAT`를 Client 모드로 설정하여 HTTP 서버 포트(예: `127.0.0.1:8089`)의 `/ws` 경로에 접속 (예: `ws://127.0.0.1:8089/ws`)
- 반대(선택적): TD가 서버, Electron이 클라이언트
  - 이 경우 TD에서 `WebSocket DAT`를 Server 모드로 열고, Electron에서 `ws://<TD_IP>:<PORT>`로 접속하도록 변경

7) 샘플 전체 워크플로우 요약

1. Electron 실행 → WebSocket 서버가 `ws://127.0.0.1:<http-port>/ws` 경로로 사용 가능
2. TD에서 `WebSocket DAT`(Client) 생성 → Address `127.0.0.1`, Port HTTP 서버 포트(예: `8089`), Path `/ws`, Active ON
3. TD에서 `DAT Execute DAT` 생성 → `onReceiveText` 콜백에 JSON 파싱 스크립트 입력
4. `Table DAT`에 x,y 저장 → `DAT to CHOP` 또는 `Script CHOP`으로 채널화
5) 필요한 노드(Null CHOP 등)으로 정리하여 네트워크에 연결

---

옵션: OSC로 직접 받기 (권장 — TouchDesigner에서 더 간단)

개요
- 위 구현은 Electron(또는 server.js)이 WebSocket으로 pose JSON을 수신하여, 내부에서 OSC UDP로 포워드하도록 옵션을 추가했습니다.
- 이 경우 TD에서는 WebSocket → DAT 파싱 단계를 거치지 않고 바로 `OSC In CHOP` 또는 `OSC In DAT`로 값을 수신할 수 있습니다.

서버 측 설정
- `server.js`는 OSC 포워드 기능을 포함합니다. 기본 대상 포트는 `7001`이며, 환경변수 `TD_OSC_PORT`로 변경 가능합니다.
- 전송되는 OSC 메시지 포맷:
  - Address: `/pose`
  - Args: `[x(float), y(float), ts(int)]`

TouchDesigner에서 받기 (OSC In CHOP)
1. 네트워크 내에서 오른쪽 클릭 → `CHOP` → `OSC In CHOP` 생성
2. 파라미터:
  - `Network Port`: `7001` (또는 server.js의 `TD_OSC_PORT`에 맞춤)
  - `Address Scope`: `/pose` 또는 빈칸(모두 수신)
3. `OSC In CHOP`은 자동으로 들어오는 OSC 메시지 주소별로 채널을 생성합니다. `/pose`의 경우 일반적으로 `pose1`, `pose2`, `pose3` 같은 채널이 생성됩니다. (버전/설정에 따라 이름이 달라질 수 있으니 값 확인 필요)
4. 채널 값 매핑
  - 첫번째 채널 → `x` 값
  - 두번째 채널 → `y` 값
  - 세번째 채널 → `ts` (타임스탬프)
5. 필요한 경우 `Rename CHOP`이나 `Math CHOP`을 사용해 채널 이름을 `x`,`y`,`ts`로 정리하거나 스케일 조정합니다.

TouchDesigner에서 받기 (OSC In DAT)
1. `OSC In DAT`를 생성하고 포트를 `7001`으로 설정
2. 수신된 DAT를 `DAT to CHOP` 또는 `DAT Execute`로 처리하여 x,y 값을 추출

테스트 방법
- server.js를 실행한 상태에서 body.html에서 PoseTrack을 시작하면 서버 로그에 `Forwarded OSC /pose [x,y,ts]` 형식 로그가 출력됩니다.
- TD 쪽에서 `OSC In CHOP`을 열어 해당 포트로 들어오는 값을 실시간 확인합니다.

트러블슈팅
- 포트 충돌: `7001`이 사용 중이면 다른 포트로 바꾸고 TD에서도 동일 포트로 설정하세요.
- 방화벽: 로컬 UDP 포트가 막혀있지 않은지 확인하세요。

끝.
