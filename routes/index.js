var express = require('express');
var router = express.Router();

/* GET home page (index.ejs). */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Curso' });
});

/* GET home page (curso.ejs) */
router.get('/curso', function(req, res, next) {
  res.render('curso', { title: 'Curso AWS re/start' });
});



module.exports = router;
