var def_layout_router = Backbone.Router.extend({
	editable: false,

	initialize: function(){
		console.log("DBG Router is set.");

		this.listenTo(app.layout.Content,"add",this.refresh);
	},

	routes: {
		"" : "display",
		"display" : "display",
		"edit" : "edit",
		"save" : "save",
		"login" : "login"
	},

	display: function(){
		console.log("DBG Page display.");
		app.menu.setPage("display");
		this.editable = false;
		this.refresh();
	},

	edit: function(){
		console.log("DBG Editing enabled.");
		app.menu.setPage("edit");
		this.editable = true;
		this.refresh();
	},

	save: function(){
		app.layout.Display.save();
		this.navigate("#display",{trigger:true});
	},

	login: function(){
		app.Page = "login";
	},


	// event handlers
	refresh: function(){
		$(".field").draggable("option","disabled",!this.editable);
		$(".field").resizable("option","disabled",!this.editable);
	}


});