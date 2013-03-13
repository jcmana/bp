var def_view_gallery = Backbone.View.extend({
	el: "#gallery",

	initialize: function(){
		console.log("DBG Gallery: View initialized.");
		this.listenTo(app.gallery.Content,"add",this.moduleAdd);
		app.gallery.Content.sync("read");
	},

	render: function(){

	},

	// event handlers
	moduleAdd: function(module){
		var module = new def_view_module({model: module});
		this.$el.append(module.render().el);
	}


});