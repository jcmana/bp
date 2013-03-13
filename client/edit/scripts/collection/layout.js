var def_collection_layout = Backbone.Collection.extend({
	model: def_model_field,

	// creation of new layout cause automatic download of layout data from server
	initialize: function(){

	},

	// database synchronization
	sync: function(method,model,options){
		switch(method){
			case "read":
				// ajax request for layout data
				$.ajax({
					type: "POST",
					url: app.comm.url,
					data: {request : "<?xml version=\"1.0\"?><request><data type=\"layout\" action=\"get\" value=\"active\"></data><data type=\"null\"></data></request>"},
					success: function(data){
						console.log("DBG Requested answer received.");

						// save field data to collection
						$(data).find("field").each(function(){
							app.layout.Content.add({
								id:$(this).attr("id"),
								pos_x:$(this).attr("pos_x"),
								pos_y:$(this).attr("pos_y"),
								size_x:$(this).attr("size_x"),
								size_y:$(this).attr("size_y"),
								instance_id:$(this).attr("intance_id")
							});
						});
					},
					dataType: "xml"
				});
				break;

			case "update":
				console.log("DBG Layout: Saving changes.");

				var request = "<?xml version=\"1.0\"?><request><data type=\"layout\" action=\"set\" value=\"active\">";

				_(this.models).each(function(field){
					request += "<field id=\""+field.get("id")+"\" ";
					request += "pos_x=\""+field.get("pos_x")+"\" pos_y=\""+field.get("pos_y")+"\" ";
					request += "size_x=\""+field.get("size_x")+"\" size_y=\""+field.get("size_y")+"\"></field>";
				});

				request += "</data></request>";

				console.log("DBG Layout: Update request: "+request);

				$.ajax({
					type: "POST",
					url: app.comm.url,
					data: {request: request},
					success: function(data){
						console.log("DBG Layout: Update response: "+data);
					},
					dataType: "text"});
				break;
		}


	}
});