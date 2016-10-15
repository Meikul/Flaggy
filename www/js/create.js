var baseName = 0;
var bases = [];
$(document).ready(function(){
	$(document).on('tap', function(event){
		event.preventDefault();
		var id = event.target.id;
		if(id=="base")
			editBase(event.target);
		if(id=="baseHeader")
			createBase(event.clientX, event.clientY);
		if(id=="delete")
			deleteBase(event.target);
		if(id=="color")
			appendPalette(event.target);
		if(id=="redSq"||id=="yellowSq"||id=="greenSq"||id=="blueSq")
			colorBase($(event.target).css('background'), event.target.parentNode.parentNode);
	});
});
function createBase(x, y){
	$('#baseHeader').after('<div id="base" props="name team" style="left:'+(x-30)+'px; top:'+(y-30)+'px;"></div>');
}
function editBase(base){
	if(base.hasChildNodes())
		$(base).children().remove();
	else
		$(base).append('<div id="editMenu" class="text"><div id="color"></div><div id="delete">T</div></div>');
}
function deleteBase(base){
	$(base.parentNode.parentNode).remove();
}
function appendPalette(symbol){
	$(symbol.parentNode).append('<div id="redSq"></div><div id="yellowSq"></div><div id="greenSq"></div><div id="blueSq"></div>');
}
function colorBase(color, base){
	$(base).css('background', color);
	$(base).children().remove();
}
function bundleBases(){
	$('#base').forEach(function(){
		var propsStr = $(this).attr("props");
		var props = propsStr.split(" ");
		props.forEach(function(val, i){
			if(/\d/.test(val)) //if value is number
				props[i] = parseInt(val);
		});
		bases.push(new Base(props));
	});
	//send bases to server
}
function Base(props){
	this.name = props[0];
	this.team = props[1];
}