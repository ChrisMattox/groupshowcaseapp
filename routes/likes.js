var express = require('express');
var router = express.Router();

// array of cooler cats
var coolLikes =
  {
    Emily: 0,
    Chris: 0,
    Joe: 0
};

router.get('/', function(req, res) {
  console.log('gettin cooler likes');
  res.send(coolLikes);
});

module.exports = router;
