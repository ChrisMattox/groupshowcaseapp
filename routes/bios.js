var express = require('express');
var router = express.Router();

// array of cooler cats
var coolCats = [
  {
    name: 'Emily',
    bio: '<br />livin\' deliciously 5eva',
    image: '../assets/images/emily.jpg',
    likes: 0
  },
  {
    name: 'Chris',
    bio: 'unhealthy obsession with Wu-Tang Clan<br />dolla dolla billz',
    image: '../assets/images/chris.jpg',
    likes: 0
  },
  {
    name: 'Joe',
    bio: '<br />living the dream',
    image: '../assets/images/joe.png',
    likes: 0
  }
];
//getting our bios and sending them to client side
router.get('/', function(req, res) {
  console.log('gettin cooler cats');
  res.send(coolCats);
});

module.exports = router;
