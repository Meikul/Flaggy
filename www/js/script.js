
$(document).ready(function(){
	socket.emit('BRequest', '');
	socket.on('BSend', function(bases){
		createBases(bases);
	});
	$('.button').click(function(){
		window.location.href = "play.html";
	});
	var socket = io();
	socket.on('BSend', function(bases){
		resetBases(bases);
	});
});

function createBases(bases)
{
	var i=0;
	bases.forEach(function(){
		$('#baseWrapper').append("<div class='base'><div style='background:"+bases[i].color+";' class='baseColor'></div>Base "+i+": <div id='base"+i+"'>"+bases[i].color+"</div></div>");
		i++;
	});
}
function resetBases(bases)
{
	$('.base').each(function(){
		$(this).html("<div style='background:"+bases[i].color+";' class='baseColor'></div>Base "+i+": <div id='base"+i+"'>"+bases[i].color+"</div>");
	});
}