$(function(){
	$("#layout-save").click(function(){
		app.layout.Content.sync("update");
		return false;
	});

	$("#sidebar").mouseover(function(){
		$("#menu").css({visibility:"visible"});
		$("#gallery").css({visibility:"visible"});
		$("#sidebar").css({width:"150px"});
	});

	$("#sidebar").mouseout(function(){
		$("#menu").css({visibility:"hidden"});
		$("#gallery").css({visibility:"hidden"});
		$("#sidebar").css({width:"15px"});
	});
});