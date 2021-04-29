var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cms'
});


connection.connect();


let sql = "delete  from type where id='4'"
connection.query(sql, function(error, results, fields) {
    // if (error) throw error;
    // console.log('The solution is: ', results[0].solution);
    console.log(error)
    console.log(results)
});


connection.end();


