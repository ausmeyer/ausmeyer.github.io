var data = [[1, 0.01598], [2, 0.011675], [3, 0.006646], [4, 0.005709], [5, 0.005554], [6, 0.004343], [7, 0.004444], [8, 0.004579], [9, 0.00459], [10, 0.004512], [15, 0.004837], [20, 0.005242], [25, 0.0051862]];

    var margin = {top: 15, right: 15, bottom: 50, left: 80}
      , width = 580 - margin.left - margin.right
      , height = 480 - margin.top - margin.bottom;
    
    var x = d3.scale.linear()
              .domain([0, d3.max(data, function(d) { return d[0]; })])
              .range([ 0, width ]);
    
    var y = d3.scale.linear()
    	      .domain([d3.min(data, function(d) { return d[1]; }) - 0.001, d3.max(data, function(d) { return d[1]; }) + 0.001])
    	      .range([ height, 0 ]);
 
    var chart = d3.select('body')
	.append('svg:svg')
	.attr('width', width + margin.right + margin.left)
	.attr('height', height + margin.top + margin.bottom)
	.attr('class', 'chart')

    var main = chart.append('g')
	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
	.attr('width', width)
	.attr('height', height)
	.attr('class', 'main')   
        
	main.append("text")
        .attr("x", width/2 - 5 )
        .attr("y",  height + margin.bottom - 2 )
        .style("text-anchor", "middle")
        .style("font-size","20px")
        .text("Time (Months)");
    
    main.append("text")
        .attr("y", 0 - margin.left / 1.25)
        .attr("x", 0 - height/2)
        .attr("transform", "rotate(-90)")
        .style("text-anchor", "middle")
        .style("font-size","20px")
        .text("Molecular Clock Rate");
        
    // draw the x axis
    var xAxis = d3.svg.axis()
	.scale(x)
	.orient('bottom')
	.ticks(4);

    main.append('g')
	.attr('transform', 'translate(0,' + height + ')')
	.attr('class', 'main axis date')
	.call(xAxis);

    // draw the y axis
    var yAxis = d3.svg.axis()
	.scale(y)
	.orient('left')
	.tickFormat(d3.format('.3f'))
	.ticks(5); 
	
    main.append('g')
	.attr('transform', 'translate(0,0)')
	.attr('class', 'main axis date')
	.call(yAxis);

    var g = main.append("svg:g");
    
    g.selectAll("scatter-dots")
      .data(data)
      .enter().append("svg:circle")
          .attr("cx", function (d,i) { return x(d[0]); } )
          .attr("cy", function (d) { return y(d[1]); } )
          .attr("r", 4);