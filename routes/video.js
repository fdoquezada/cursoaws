var express = require('express');
var router = express.Router();
var db= require('../conexion/conexion');



/* GET home page (videos.ejs) */
router.get('/', function(req, res, next) {

  db.query('SELECT * FROM videos',function(err, results, fields) {
      // console.log(results);

      res.render('video', { title: 'Videos de Profesor',Videos:results });
      });

});


module.exports = router;




