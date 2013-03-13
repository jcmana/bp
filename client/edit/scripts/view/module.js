var def_view_module = Backbone.View.extend({
	tagName: "div",
	className: "module",

	events: {
		"dblclick"	: "instantiate"
	},

	initialize: function(){
		this.listenTo(this.model,"change",this.render);
// 		this.model.fetch();

		this.id = this.model.get("id");
	},

	render: function(){
		this.$el.html("module_"+this.id);
		return this;
	},

	// event handlers
	instantiate: function(){
		var instance_name = prompt("Enter name of new instance of module \""+this.model.get("name")+"\"");

		if( instance_name == "" ) return;

		$.ajax({
			method: "POST",
			url: app.comm.url,
			data: {request: "<?xml version=\"1.0\"?>\
						<request>\
							<data type=\"module\" action=\"service\" value=\"\">\
								<service type=\"instantiate\" value=\""+this.model.get("id")+"\" name=\""+instance_name+"\"></service>\
							</data>\
						</request>"},
			success: function(data){
				console.log("DBG Instantiate response: "+data);
			},
			dataType: "text/xml"
		});

		app.layout.Content.add({
				id:this.model.get("id"),
				pos_x:50,
				pos_y:50,
				size_x:200,
				size_y:200});
	}


});