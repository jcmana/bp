var def_view_field = Backbone.View.extend({
	tagName: "div",
	className: "field",

	initialize: function(){
		this.id = this.model.get("id");

		this.listenTo(this.model,"change",this.render);

		this.model.fetch();
	},

	render: function(){
		this.$el.css({
			position:"absolute",
			top:this.model.get("pos_y")+"px",
			left:this.model.get("pos_x")+"px",
			width:this.model.get("size_x")+"px",
			height:this.model.get("size_y")+"px"});

		this.$el.html(this.model.get("content"));

		return this;
	}
});