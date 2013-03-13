var def_collection_gallery = Backbone.Collection.extend({
	model: def_model_module,

	initialize: function(){
		console.log("DBG Gallery: Collection initialized.");

	},

	sync: function(method,model,options){
		console.log("DBG Gallery: Syncing: "+method);

		switch(method){
			case "create":
				break;
			case "read":
				console.log("DBG Gallery: Retrieving list of enabled modules.");

				$.ajax({
					type: "POST",
					url: app.comm.url,
					data: {request : "<?xml version=\"1.0\"?><request><data type=\"module\" action=\"get\" value=\"gallery\"></data></request>"},
					success: function(data){
						console.log("DBG Gallery: Received module list.");

						// save field data to collection
						$(data).find("module").each(function(){
							app.gallery.Content.add({
								id:$(this).attr("id"),
								code:$(this).attr("code"),
								name:$(this).attr("name"),
								desc:$(this).attr("desc"),
								icon:"blabla"
							});
							console.log("DBG Gallery: Module add : "+$(this).attr("id"));
						});
					},
					dataType: "xml"
				});

				break;

			case "update":
				break;

			case "delete":
				break;
		}

	}

});