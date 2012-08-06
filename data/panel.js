




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
		URLlist.prepend('<p>' + URL + '</p>');
	}
	$('#URLlist p').click(function(event) {
		var $target = $(event.target);
		$('#childURLs').empty();
		for (var j in storedURLs[$target.html()]) {
		$('#childURLs').prepend('<p>' + storedURLs[$target.html()][j] + '</p>');
		}
	})

	var paper = new Raphael(document.getElementById('raphaelDiv'),1000,1000);
	var circ = paper.circle(250, 250, 40);  
        circ.attr({fill: '#000', stroke: 'none'});

    var text = paper.text(250, 250, 'Bye Bye Circle!')  
	text.attr({opacity: 0, 'font-size': 12}).toBack();  

	circ.node.onmouseover = function() {  
    this.style.cursor = 'pointer';  
	}

	circ.node.onclick = function() {  
    text.animate({opacity: 1}, 2000);  
    circ.animate({opacity: 0}, 2000, function() {  
        this.remove();  
    });  
	}   




	//create canvas element in the panel
	// var canvas = $('#canvasDiv canvas');
	// //set the canvas size
	// canvas.attr({
	// 	height: 400,
	// 	width: 200
	// });

	// var context = canvas.get(0).getContext('2d');
	// context.beginPath();
 //    context.arc(100, 100, 50, 0, 2 * Math.PI, false);
 //    context.fillStyle = "#8ED6FF";
 //    context.fill();
 //    context.lineWidth = 5;
 //    context.strokeStyle = "black";
 //    context.stroke();

	//URLlist.html(storedURls);

});


