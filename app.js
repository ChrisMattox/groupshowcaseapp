var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// routing modules
var index = require('./routes/index');
var bios = require('./routes/bios');
var likes = require('./routes/likes');


app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/bios', bios);
app.use('/likes', likes);

// Static Files
app.use('/', index);

// Set port to listen on
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('Fuckin server is listening on port ' + app.get('port'));
});
