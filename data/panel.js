function getMethods(object) {
	var methods = [];
	for (var m in object) {
		if (typeof object[m] == 'function') {
			methods.push(m);
		}
	}
	return methods;
}

self.port.on('widgetClicked',function createURLList(storedURls){
	console.log("Working");
	var URLlist = $('#URLlist');
	URLlist.empty();
	storedURls.forEach( function(URL) {
		URLlist.prepend('<p>' + URL + '<p');
	})
	//create canvas element in the panel
	var canvas = $('#canvasDiv canvas');
	console.log(getMethods(canvas));

	canvas.attr({
		height: 500,
		width: 1000
	});
	var context = canvas.get(0).getContext('2d');
	context.beginPath();
    context.moveTo(100, 150);
    context.lineTo(450, 50);
    context.stroke();


	//URLlist.html(storedURls);

});


