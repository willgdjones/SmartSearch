self.port.on('widgetClicked',function createURLList(storedURls){
	console.log("Working");
	var URLlist = $('#URLlist');
	URLlist.empty();
	storedURls.forEach( function(URL) {
		URLlist.prepend('<p>' + URL );
	})
	//URLlist.html(storedURls);

});


