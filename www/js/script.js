
$(document).ready(function(){
	// socket.emit('BRequest', '');
	// socket.on('BSend', function(bases){
	// 	createBases(bases);
	// });
	$('.button').click(function(){
		window.location.href = $(this).attr('href');
	});
	// nfc.addMimeTypeListener('flaggy', function(nfcEvent){
 //    	var records = nfcEvent.tagData;

 //    	for (var i = 0; i < records.length; i++){
 //        	var record = records[i];
 //        	socket.emit('nfcID', nfc.bytesToString(record.payload));
 //    	}
	// });

	// var socket = io();
	// socket.on('BSend', function(bases){
	// 	resetBases(bases);
	// });
});