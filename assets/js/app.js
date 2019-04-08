var tricks = [];
var userInput;

$('#add-trick').on('click', function(){
	event.preventDefault();
	$('.tricks-completed').empty();

	var side = $('#side').val();
	var pop = $('#pop').val();
	var turn = $('#turn').val();
	var flip = $('#flip').val();
	var grinds = $('#grinds').val();
	var to = $('#to').val();
	var grinds2 = $('#grinds-2').val();

	landed = side + ' ' + pop + ' ' + turn + ' ' + flip + ' ' + grinds + ' ' + to + ' ' + grinds2;

	tricks.push(landed);

	for (var i = 0; i < tricks.length; i++) {
		var landed = $('<div>').addClass('landedBtn');
		landed.attr("data-type", "land");
		landed.text(tricks[i]);
		$('.tricks-completed').prepend(landed);
		$('#enter-trick').text('');
	
	
		$(document).on('click', '.landedBtn', function(){
			var state = $(this).attr('data-type');

			if (state === 'land') {
				$(this).attr("data-type", "bail");
			} else {
				$(this).attr("data-type", "land");
			}
		});
	}
	console.log(tricks);
})

