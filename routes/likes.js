var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

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

router.post('/', function(req, res) {
  // console.log('dis shit works');
  console.log(req.body.name);
  var name = req.body.name;
  // console.log(name);
  // console.log(coolLikes.name);
  console.log(coolLikes[name]);
  coolLikes[name]++;
  res.sendStatus(201);
})

module.exports = router;
