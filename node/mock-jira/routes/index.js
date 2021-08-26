var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
  next();
});

router.get('/username', function (req, res, next) {
  log(req)
  res.send('respond with a resource');
})

module.exports = router;
