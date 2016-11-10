$(document).ready(function() {
  console.log('up and running!');

getCoolCats();
getCoolLikes();

var cool = {
  name: ''
};

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

function appendCoolCats(coolCats) {
  $('#showcase').empty();

  for (var i = 0; i < coolCats.length; i++) {
    $('#showcase').append('<div><h2>' + coolCats[i].name + '</h2><p>' + coolCats[i].bio + '</p>' + '<img src="' + coolCats[i].image + '"><button class="like-button" id="' + coolCats[i].name + '">Like ' + coolCats[i].name +'</button></div>');

  }
}

$('#showcase').on('click', '.like-button', function (){

  var name = $(this).attr("id");
  cool.name = name;
  likeCoolCat(cool);
});

function likeCoolCat (name) {
    // var name = $(this).attr("id");
    // console.log(coolLikes.name);
    // postRequest();
    console.log(name);
    $.ajax({
      type: 'POST',
      url: '/likes',
      data: name,
      success: function(data){
        console.log(data);
        // console.log(name);
        //coolLikes.name++;
        console.log("sending likes");
        appendCoolLikes(data);
      }
    });
  }



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
// function postRequest(){
//   // $.ajax({
//   //   type: 'POST',
//   //   url: '/likes',
//   //   success: function(data){
//   //     console.log("sending likes");
//   //   }
//   // });
// }
function appendCoolLikes(coolLikes) {
  $('#likeDiv').empty();
  $('#likeDiv').append('<p>Number of likes: '+ coolLikes.Emily +'</p>');
  $('#likeDiv').append('<p>Number of likes: '+ coolLikes.Chris +'</p>');
  $('#likeDiv').append('<p>Number of likes: '+ coolLikes.Joe +'</p>');
}

});
