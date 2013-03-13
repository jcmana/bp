var def_view_field = Backbone.View.extend({
	tagName: "div",
	className: "field",

	events: {
		"click #field-settings" : "settingsPopup"
	},

	initialize: function(){
		this.listenTo(this.model,"change",this.render);
		this.model.fetch();

		this.id = this.model.get("id");

		var _this = this;
		this.$el.draggable({
			disabled:false,
			stop: function(){
				console.log("DBG Field dragged: x="+parseInt(_this.$el.css("left"))+", y="+parseInt(_this.$el.css("top")));
				_this.model.set({
					pos_x:parseInt(_this.$el.css("left")),
					pos_y:parseInt(_this.$el.css("top"))
				});
			}
		});
		this.$el.resizable({
			disabled: false,
			handles: "e,s,se",
			stop: function(){
				console.log("DBG Field resized: width="+parseInt(_this.$el.css("width"))+", height="+parseInt(_this.$el.css("height")));
				_this.model.set({
					size_x:parseInt(_this.$el.css("width")),
					size_y:parseInt(_this.$el.css("height"))
				});
			}
		});

		this.$el.append("<div id=\"field-content\"></div>");
		this.$el.append("<div id=\"field-settings\"><a href=\"#\">x</a></div>");

	},

	render: function(){
		this.$el.css({
			position:"absolute",
			top:this.model.get("pos_y")+"px",
			left:this.model.get("pos_x")+"px",
			width:this.model.get("size_x")+"px",
			height:this.model.get("size_y")+"px",
			border:"1px solid gray"
		});

		this.$el.children("#field-content").html(this.model.get("content"));

		return this;
	},

	// event handlers
	settingsPopup: function(){
		popup_window_show({width:"400px",height:"400px"},{top:"50px",left:"50px"},"Instance configuration.");
	}
});