var express = require('express');
var router = express.Router();


/* GET seila listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>rotinha não sei.(hehe)</h1>');
});
module.exports = router;
