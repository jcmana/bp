var def_view_layout = Backbone.View.extend({
	el: "#canvas",

	initialize: function(){
		this.listenTo(app.layout.Content,"add",this.fieldAdd);

		app.layout.Content.fetch();
	},

	render: function(){

	},

	save: function(){
		app.layout.Content.sync("update");
	},

	//event handlers
	fieldAdd: function(field){
		var field = new def_view_field({model: field});
		this.$el.append(field.render().el);
	}
});
