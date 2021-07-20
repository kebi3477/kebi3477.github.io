const db = window.openDatabase('kdm', '1.0', 'kdm portfolio database', 2*1024*1024);
db.transaction(function (tx) {
    tx.executeSql("CREATE TABLE PROJECT (project_id, project_name)")
})