self.port.on('widgetClicked',function createURLList(storedURls){
	console.log("Working");
	var URLlist = $('#URLlist');
	URLlist.empty();
	storedURls.forEach( function(URL) {
		URLlist.prepend('<p>' + URL + '<p');
	})
	var canvas = $('#canvasDiv canvas');
	canvas.attr({
		height: 500,
		width: 1000
	});
	//URLlist.html(storedURls);

});


