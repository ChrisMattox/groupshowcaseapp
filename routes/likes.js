var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// object of each other's likes
var coolLikes =
  {
    Emily: 0,
    Chris: 0,
    Joe: 0
};

// getting likes and sends object to client side
router.get('/', function(req, res) {
  res.send(coolLikes);
});

// responds to client clicking like button, parses body into the coolLikes property
router.post('/', function(req, res) {
  var name = req.body.name;
  coolLikes[name]++;
  res.sendStatus(201);
})

module.exports = router;
