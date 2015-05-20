var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {currentPage: 'index'});
});

router.get('/projects', function(req, res, next) {
  res.render('projects', {currentPage: 'projects'});
});

router.get('/cv', function(req, res, next) {
  res.render('cv', {currentPage: 'cv'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {currentPage: 'contact'});
});

module.exports = router;
