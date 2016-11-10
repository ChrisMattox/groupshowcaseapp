$(document).ready(function() {
  console.log('up and running!');

//calling two get requests to post both our bios and our like count to the DOM
getCoolCats();
getCoolLikes();

//setting empty cool object so that our post request is formatted correctly
var cool = {
  name: ''
};

//function to get our bios from the server
function getCoolCats() {
  $.ajax({
    type: 'GET',
    url: '/bios',
    success: function(data) {
      console.log('got em');
      appendCoolCats(data);
    }
  });
}

//function to append our Bios to the DOM
function appendCoolCats(coolCats) {
  $('#showcase').empty();

  for (var i = 0; i < coolCats.length; i++) {
    $('#showcase').append('<div id="catContainer"><h2>' + coolCats[i].name + '</h2><p>' + coolCats[i].bio + '</p>' + '<img src="' + coolCats[i].image + '"><button class="like-button" id="' + coolCats[i].name + '">Like ' + coolCats[i].name +'</button></div>');

  }
}

//click event for liking cool cats
$('#showcase').on('click', '.like-button', function (){

  var name = $(this).attr("id");
  cool.name = name;
  likeCoolCat(cool);
});

//function to post a like for a cool cat to the server, empty the likeDiv, then
//reappend the like data to the DOM with another get request
function likeCoolCat (name) {
  event.preventDefault();
    console.log(name);
    $.ajax({
      type: 'POST',
      url: '/likes',
      data: name,
      success: function(data){
        console.log(data);
        console.log("sending likes");
        getCoolLikes();
      }
    });
  }



//function to get like data from the server, then append that info to the DOM
function getCoolLikes() {
  $.ajax({
    type: 'GET',
    url: '/likes',
    success: function(data) {
      console.log('i like you');
      appendCoolLikes(data);
    }
  });
}

//function to clear out likeDiv, then append like data to the DOM
function appendCoolLikes(coolLikes) {
  $('#likeDiv').empty();
  $('#likeDiv').append('<p>Likes 4 Emily: '+ coolLikes["Emily"] +'</p>');
  $('#likeDiv').append('<p>Likes 4 Chris: '+ coolLikes["Chris"] +'</p>');
  $('#likeDiv').append('<p>Likes 4 Joe: '+ coolLikes["Joe"] +'</p>');
}

});
