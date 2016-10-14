$(document).ready(function(){
	var newTap=true;
	$(document).on('tap',function(event){
		if(newTap){
			newTap = false;
			switch(event.target.id){
				case "base":
					editBase(event.target);
					break;
				case "baseHeader":
					createBase(event.clientX, event.clientY);
					break;
				case "delete":
					$(event.target.parentNode.parentNode).remove();
			}
		}
	});
	$(document).on('vmouseup',function(event){
		newTap = true;
		console.log("newTap");
	});
});

function createBase(x, y){
	console.log("create base");
	$('#baseHeader').after('<div id="base" style="left:'+(x-30)+'px; top:'+(y-30)+'px;"></div>');
}
function editBase(base){
	console.log("edit base: "+base.id+", "+base.style.left+", "+base.style.top);
	$(base).append('<div id="editMenu" style="left:-10px; top:-30px;" class="text"><div id="color"></div><div id="delete">T</div></div>');
}