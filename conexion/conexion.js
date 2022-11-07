const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'',
  database: 'curso',
  port: 3307
});

  connection.connect(
    (err)=>{
      if(!err){console.log("Conexion establecida");}
      else{console.log("Conexion fallida"); }
    }
  );

  module.exports = connection;
   

 