bases = [
    {color:'red', nfcID:'b00'},
    {color:'red', nfcID:'b01'},
    {color:'red', nfcID:'b02'},
    {color:'red', nfcID:'b03'},
    {color:'red', nfcID:'b04'},
    {color:'red', nfcID:'b05'},
    {color:'red', nfcID:'b06'}
];

users = [
     {color:'red', id:'madram'},
     {color:'blue', id:'meikul'}
];

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function(socket){
  socket.on('BRequest', function(req){
      io.emit("BSend", bases);
  });

  socket.on('nfcID', function(cardID){
      //Change base colors
      
      io.emit("BSend", bases);
  });
});



http.listen(3000, function(){
  console.log('listening on *:3000');
});