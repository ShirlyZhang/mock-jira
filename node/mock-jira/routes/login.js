var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET users listing. */
router.get('/', function (req, res, next) {
   res.send(req.query);
});
router.get('/register', function (req, res, next) {
   res.send(req.query);
});


module.exports = router;
