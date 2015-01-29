try{
	var _BC = {
		init:function(){
			_BC.getConteudo();
		},
		getConteudo:function(){
			$.ajax({   			 
				type: "GET", 
				// the name of the callback parameter, as specified by the YQL service
	    		jsonp: "callback",
	 
	    		// tell jQuery we're expecting JSONP
	    		dataType: "jsonp", 

				url: "http://dynamicstorage.vtexcrm.com.br/api/ds/pub/documents/BC",      
				data: {                
				  f: "id",
				  an:"vtex"
				}
		    }).success(function(data){		    	
		    	var source   = $("#entry-template").html();
		        var template = Handlebars.compile(source);
		        var context = data;
		        var html    = template(context); 
		        $("#template-content").append(html) ;
		    }).fail(function(data,xhr){
		    	console.log(xhr);
		    });
		}
	}

	$(document).ready(function(){		
		_BC.init();
	});
}
catch(e){
	if (typeof console !== "undefined" && typeof console.error === "function" && typeof console.info === "function") {
		console.info("Erro");
		console.error(err);
	}
}