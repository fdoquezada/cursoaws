var express = require('express');
var router = express.Router();



/* GET home page (videos.ejs) */
router.get('/', function(req, res, next) {
  res.render('video', { title: 'Videos de Profesor' });
});



module.exports = router;





  