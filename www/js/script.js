
$(document).ready(function(){
	// socket.emit('BRequest', '');
	// socket.on('BSend', function(bases){
	// 	createBases(bases);
	// });
	$('.button').click(function(){
		window.location.href = $(this).attr('href');
	});
	// var socket = io();
	// socket.on('BSend', function(bases){
	// 	resetBases(bases);
	// });
});