var blurred = false;
window.onblur = function() { blurred = true; };
window.onfocus = function() { blurred && (location.reload()); };

$(document).ready(function(){
	// $('.button').mousedown(function(){
	// 	$(this).css("background","#aaaaaa");
	// });
	// $('.button').mouseup(function(){
	// 	$(this).css("background","#344958");
	// 	window.location.href = $(this).attr("href");
	// });
	$('.button').click(function(){
		window.location.href = $(this).attr("href");
	});
});