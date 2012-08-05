function getMethods(object) {
	var methods = [];
	for (var m in object) {
		if (typeof object[m] == 'function') {
			methods.push(m);
		}
	}
	return methods;
}

self.port.on('widgetClicked',function createURLList(storedURLs){
	console.log("Working");
	var URLlist = $('#URLlist');
	URLlist.empty();
	for (var URL in storedURLs) {
		URLlist.prepend('<p>' + storedURLs[URL] + '</p>');
	}

	// storedURLs.forEach( function(URL) {
	// 	URLlist.prepend('<p>' + URL + '</p>');
	// })
	//create canvas element in the panel
	var canvas = $('#canvasDiv canvas');
	//set the canvas size
	canvas.attr({
		height: 100,
		width: 200
	});

	var context = canvas.get(0).getContext('2d');
	context.beginPath();
    context.arc(300, 300, 50, 0, 2 * Math.PI, false);
    context.fillStyle = "#8ED6FF";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();

	//URLlist.html(storedURls);

});


