




self.port.on('widgetClicked',function createURLList(storedURLs){

	function createNodeData(URLObject) {
            var nodeData = [];
            i = 0;
            for (URL in URLObject) {
                nodeData.push( { 'index':i, 'url': URL, 'x':100, 'y':300 } ) 
                i += 1
            }
            return nodeData
        };

    function createLinkData(URLObject) {
        var linkData = [];
        for (URL in URLObject) {
            for (j in URLObject[URL]) {
                linkData.push( {
                                        'source': url_to_index[URL],
                                        'target': url_to_index[URLObject[URL][j]]
                                    } 
                                    )

            }
        }
        return linkData;
    };

    function createForceDirectedLayout(nodeData,linkData,svg,charge_value,distance_value)
     {
        var force = d3.layout.force()
        .charge(charge_value)
        .distance(distance_value)
        .nodes(nodeData)
        .links(linkData)
        .size([500, 500])
        .start();

        var link = svg.selectAll("line.link")
        .data(linkData)
      .enter().append("svg:line")
        .style("stroke", "#ccc")
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

        var node = svg.selectAll("circle.node")
        .data(nodeData)
        .enter()
      .append("svg:circle")
        .style("fill", "#000")
        .style("stroke", "#fff")
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })
        .attr("r", 5)
        .on("click",function(d) {console.log(d.url)})
        .call(force.drag);



        force.on("tick", function() {
            link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

            node
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
        });
    };

    function createURLToIndex(URLObject) {
        url_to_index = {};
        i = 0;
        for (URL in URLObject) {
            url_to_index[URL] = i;
            i += 1
        }
        return url_to_index;
    };

    d3.select("#d3Div svg").remove();

	var URLlist = $('#URLlist');
	URLlist.empty();
	for (var URL in storedURLs) {
		URLlist.prepend('<p>' + URL + '</p>');
	}
	// $('#URLlist p').click(function(event) {
	// 	var $target = $(event.target);
	// 	$('#childURLs').empty();
	// 	for (var j in storedURLs[$target.html()]) {
	// 	$('#childURLs').prepend('<p>' + storedURLs[$target.html()][j] + '</p>');
	// 	}
	// })

	
	var svg = d3.select("#d3Div").append("svg:svg")
	    	.attr("width", 500)
	        .attr("height", 500);
	   

    // var URLObject = {   'url1':['url2'] ,
    //                     'url2':['url3','url4'] ,
    //                     'url3':['url5'] ,
    //                     'url4':['url6'],
    //                     'url5' : [],
    //                     'url6': []
    //                 };

    var URLObject = storedURLs;

    var url_to_index = createURLToIndex(URLObject)
    var nodeData = createNodeData(URLObject);
    var linkData = createLinkData(URLObject);

    createForceDirectedLayout(nodeData,linkData,svg,-120,30);


});


