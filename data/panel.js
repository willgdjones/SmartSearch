function drawCircleOn(paper,x,y,url) {
	var circle = paper.circle(x, y, 20);
	circle.url = url;
	circle.xcoord = x;
	circle.ycoord = y;
	circle.attr({fill: "#8ED6FF", stroke: '#000', 'stroke-width': 3});
	
	circle.hover( function(){
		circle.animate({'stroke-width': 6},100);
		console.log(circle.url);
	} , function(){
		circle.animate({'stroke-width': 3},100); 
	});

}


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

	var svg = d3.select("#d3Div").append("svg:svg")
          .attr("width", 960)
          .attr("height", 700);

	var URLdata = [ {'url1':['url2']} , {'url2':['url3','url4']} , {'url3':[]} , {'url4':[]} ];
	var nodeData = [ {'index': 0, 'x':100, 'y': 300}, {'index': 1, 'x':300, 'y':200}, {'index': 2, 'x': 200, 'y': 100}]

	var force = d3.layout.force()
    .charge(-120)
    .distance(30)
    .nodes(nodeData)
    .size([500, 500])
    .start();

    var node = svg.selectAll("circle.node")
    .data(nodeData)
    .enter()
   .append("svg:circle")
    .style("fill", "#000")
    .style("stroke", "#fff")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", 10)
    .call(force.drag);

    force.on("tick", function() {
  		node.attr("cx", function(d) { return d.x; })
      	.attr("cy", function(d) { return d.y; });
	});

    

















	// var paper = new Raphael(document.getElementById('raphaelDiv'),500,500);

	// var circleHolder = paper.set();

	// for (k=0;k<4;k++) {

	// 	circleHolder.push( paper.circle(40 + k*70,40 + k*70,40).attr({
	// 		"fill":"black", "stroke":"orange", "stroke-width":4}) )

	// }

	// Raphael.st.nodes = function() {
 //  		var elements = [];
 //  		this.forEach( function(i) {
 //    		elements.push( i.node );
 //  		});
 //  		return elements;
	// }

	// var nodes = circleHolder.nodes();
	// var force = d3.layout.force().charge(-200).gravity(.05).nodes(nodes).size([100,100]).start();



	// var k = 0
	// for (URL in storedURLs) {
	// 	drawCircleOn(paper, 50 + 50*k, 50 + 50*k,URL);  
	// 	k++; 
	// }



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


