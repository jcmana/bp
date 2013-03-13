var app = {};

$(function(){
	console.log("APPLICATION STARTUP");

	app.comm = {};
	app.layout = {};
	app.gallery = {};

	app.comm.url = "/bp-web/prototype/app/comm.php";

	app.layout.Content = new def_collection_layout();
	app.layout.Display = new def_view_layout();

	app.gallery.Content = new def_collection_gallery();
	app.gallery.Display = new def_view_gallery();
});