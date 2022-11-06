const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '527319',
  database: 'curso',
  port :3306
})

connection.connect(
  (err)=>{
    if(!err){console.log("Conexion estblacida");}
    else{console.log("Conexion fallida");}
  }
)



connection.query('SELECT * FROM tblvideos',function(err, results, fields) {
    console.log(results);
});    
connection.end()