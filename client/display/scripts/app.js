var app = {};

$(function(){
	console.log("APPLICATION STARTUP");

	app.layout = {};

	app.layout.Content = new def_collection_layout();
	app.layout.Display = new def_view_layout();

});