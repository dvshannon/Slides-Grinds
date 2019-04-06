var tricks = [];
var userInput;

$('#add-trick').on('click', function(){
  event.preventDefault();
  $('.tricks-completed').empty();
  userInput = $('#enter-trick').val().trim();
  tricks.push(userInput);
    console.log(tricks);

    for (var i = 0; i < tricks.length; i++) {
      var landed = $('<div>').addClass('landedBtn');
      landed.text(tricks[i]);
      $('.tricks-completed').prepend(landed);
      $('#enter-trick').text('');
    }
})
