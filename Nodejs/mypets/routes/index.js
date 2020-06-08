var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sinhvien/list',function(req,res,next){
  res.render('sinhvien_list')
})
module.exports = router;
