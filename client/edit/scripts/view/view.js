/*
var def_view_page = Backbone.View.extend({
	el: "#canvas",

	initialize: function(){
		this.render();

		this.listenTo(app.layout.Model,"change",this.eventModelChange);
	},

	render: function(){
		this.$el.html("i am alive");

		try{
		app.layout.Model.each(function(field){
			var field_id = "field_"+field.get("id");
			app.layout.View.$el.append("<div id=\""+field_id+"\"></div>");
			$("#"+field_id).css({
				position:"absolute",
				top:field.get("pos_y")+"px",
				left:field.get("pos_x")+"px",
				border:"1px solid black",
				width:field.get("size_x")+"px",
				height:field.get("size_y")+"px"});

			console.log("DBG rendering '"+field_id+"'");
		});
		}
		catch(e){
			console.log("DBG error: "+e.message);
		}
	},

	// event handlers
	eventModelChange:function(){

		console.log("DBG 'model-change' event.");

		app.layout.View.render();
	}
});

var def_view_field = Backbone.View.extend({
	tagName: "div",
	className: "field",
	id: "0",

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html(this.el);
	}
});
*/


var def_layout_display = Backbone.View.extend({
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
		var field = new def_layout_field({model: field});
		this.$el.append(field.render().el);
	}
});

var def_layout_field = Backbone.View.extend({
	tagName: "div",
	className: "field",

	initialize: function(){
		this.id = this.model.get("id");

		this.listenTo(this.model,"change",this.render);

		var _this = this;
		this.$el.draggable({
			disabled: true,
			stop: function(){
				console.log("DBG Field dragged: x="+parseInt(_this.$el.css("left"))+", y="+parseInt(_this.$el.css("top")));
				_this.model.set({
					pos_x:parseInt(_this.$el.css("left")),
					pos_y:parseInt(_this.$el.css("top"))
				});
			}
		});
		this.$el.resizable({
			disabled: true,
			handles: "e,s,se",
			stop: function(){
				console.log("DBG Field resized: width="+parseInt(_this.$el.css("width"))+", height="+parseInt(_this.$el.css("height")));
				_this.model.set({
					size_x:parseInt(_this.$el.css("width")),
					size_y:parseInt(_this.$el.css("height"))
				});
			}
		});
	},

	render: function(){
		this.$el.css({
			position:"absolute",
			top:this.model.get("pos_y")+"px",
			left:this.model.get("pos_x")+"px",
			border:"1px solid black",
			width:this.model.get("size_x")+"px",
			height:this.model.get("size_y")+"px"});



		return this;
	}
});

var def_menu = Backbone.View.extend({
	el: "#menu",

	initialize: function(){
		this.setPage("display");
	},

	render: function(){

	},

	setPage: function(page){
		switch(page)
		{
			case "display":
				$("#link-edit").css({visibility: "visible"});
				$("#link-save").css({visibility: "hidden"});
				$("#link-cancel").css({visibility: "hidden"});
				break;
			case "edit":
				$("#link-edit").css({visibility: "hidden"});
				$("#link-save").css({visibility: "visible"});
				$("#link-cancel").css({visibility: "visible"});
				break;
		}
	}

// 	show: function(){
// 		this.$el.css({visible:true});
// 	},
// 	hide: function(){
// 		this.$el.css({visible:false});
// 	}

});