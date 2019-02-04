var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'about' });
});

/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'products' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'contact' });
});

module.exports = router;
