var blurred = false;
window.onblur = function() { blurred = true; };
window.onfocus = function() { blurred && (location.reload()); };

$(document).ready(function(){
	$('.button').mousedown(function(){
		$(this).css("background","#aaaaaa");
	});
	$('.button').mouseup(function(){
		$(this).css("background","#344958");
		window.location.href = $(this).attr("href");
	});
});

/*function proportion()
{
	var wholeProp;
	var props = [];
	var full;
	var current;
	$('div[prop]').each(function() {
    	fullProp = $(this).attr("prop");
    	props = fullProp.split(" ");
	    	for(var i = 1; i < props.length(); i+=2)
	    	{
	      	if(props[i]=="w")//width
	      	{
	    		full = $(window).width();
	    		$(this).css("width", full*props[0]);
	    	}
	    	else if(props[i]=="h")//height
	    	{
	    		full = $(window).height();
	    		$(this).css("height", full*props[1]);
	    	}
    	}
	});
}*/