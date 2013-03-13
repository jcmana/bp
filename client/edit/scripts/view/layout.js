var def_view_layout = Backbone.View.extend({
	tagName: "div",
	el: "#canvas",

	events: {
		"click #layout-save" : "save",
	},

	initialize: function(){
		this.listenTo(app.layout.Content,"add",this.fieldAdd);

		app.layout.Content.sync("read");
	},

	render: function(){

	},

	save: function(){
		console.log("DBG Layout: saving changes.");
		app.layout.Content.sync("update");
	},

	//event handlers
	fieldAdd: function(field){
		var field = new def_view_field({model: field});
		this.$el.append(field.render().el);
	}
});
