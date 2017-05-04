$(document).ready(function() {
	
	for (i=0; i<4096; i++) {
	$("<div>", {class: 'col'}).appendTo($(".container"));

	// $(".container").append("<div>");
	// $('div div').addClass("col");
}
	$(".col").hover(function() {
		$(this).css("background-color", "blue");
	}, function() {
		$(this).css("background-color", "blue");
	});
	
	$('#clear').click(function () {
		$('.col').css('background-color', 'white');
	
	});

	});

