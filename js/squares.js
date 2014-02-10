$(document).ready(function () {
	$('#lgrid').append('<div class=\"height-11\"></div>');
	for (var i=0; i<10; i++) {
		$('#lgrid').append('<div class=\"height-11 padded\"><div class=\"bbox fullheight\"></div></div>');
	}

	for (var i=0; i<10; i++) {
		$('#rugrid').append('<div class=\"bit-10 padded fullheight\"><div class=\"bbox fullheight\"></div></div>');
	}

	for (var i=0; i<100; i++) {
		$('#mgrid').append('<div class=\"bit-10 padded height-11\"><div class=\"mbox fullheight\"></div></div>');
	}
});