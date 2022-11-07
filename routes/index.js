var express = require('express');
var router = express.Router();

/* GET home page (index.ejs). */
router.get('/', function(req, res, next) {
  const mysql = require('mysql')
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'curso',
    port: 3307
  })
  
  connection.connect(
    (err)=>{
      if(!err){console.log("Conexion establecida");}
      else{console.log("Conexion fallida");}
    }
  );
  
 module.exports = connection;


  res.render('index', { title: 'Curso' });
});

/* GET home page (curso.ejs) */
router.get('/curso', function(req, res, next) {
  res.render('curso', { title: 'Curso AWS re/start' });
});



module.exports = router;
