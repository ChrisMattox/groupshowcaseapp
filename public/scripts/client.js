$(document).ready(function() {
  console.log('up and running!');

getCoolCats();
getCoolLikes();

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

      $('#showcase').on('click', '.like-button', likeCoolCat);

function likeCoolCat (coolLikes) {

    var name = $(this).attr("id");
    console.log(name);
    coolLikes.name++;
    console.log(coolLikes.name);
  }



function getCoolLikes () {
  $.ajax({
    type: 'GET',
    url: '/likes',
    success: function(data) {
      console.log('i like you');
    }
  });
}

});
