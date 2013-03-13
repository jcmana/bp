var def_model_field = Backbone.Model.extend({
	defaults: {
		id: 0,
		pos_x: 0,
		pos_y: 0,
		size_x: 0,
		size_y: 0,
		content: ""
	},

	sync: function(method,model,options){
		// retrieves module instance data from server

		switch(method)
		{
			case "read" :
				console.log("DBG Retrieving module data.");

				var self = this;

				$.ajax({
					type: "POST",
					url: "/bp-web/prototype/app/comm.php",
					data: {request : "<?xml version=\"1.0\"?><request><data type=\"module\" action=\"service\" value=\""+this.get("id")+"\"><service type=\"display\"></service></data></request>"},
					success: function(data){
						self.set({content:data});
						console.log("DBG Field content received.");
					},
					dataType: "text"
				});


				break;
		}
	}
});