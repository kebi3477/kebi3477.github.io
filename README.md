# Eye Tracking Config

This project lets you tune eye movement sensitivity and max range via `localStorage`.

## How it works
- On every page load, the script ensures `localStorage` has a default config.
- If the key is missing, it writes defaults automatically.
- You can update values in the browser console and reload to apply.

## Config key
`eyeConfig`

### Fields
- `sensitivity` (number): 0.1 ~ 3.0
- `max` (number): 0 ~ 10 (10 = reach the edge of the white eye shape)

## Examples
Set higher sensitivity, slightly smaller max range:
```js
localStorage.setItem('eyeConfig', JSON.stringify({
  sensitivity: 1.4,
  max: 8
}))
location.reload()
```

Reset to defaults:
```js
localStorage.removeItem('eyeConfig')
location.reload()
```
