//D3.js page example

d3.select("body").style("background-color", "black");

d3.selectAll("p").style("color", "white");

//Random Color using Hue, Saturation, Lightnes
d3.selectAll("p").style("color", () => {
  return `hsl( ${Math.random() * 360 } ,100%,50%)`;
});

d3.selectAll("p")
  .data([16, 24, 32, 48])
  .style("font-size", (d) => { return d + "px"; });


// Update…
var p = d3.select("body")
.selectAll("p")
.data(["Someting", "Something Else", "One More Thing", "The End"])
  .text(function(d) { return d; });



     
//Create Shapes using D3.js

    let svg = d3.select("#chart")
        .append("svg")
        // .attr("width", 800)
        // .attr("height", 800)

        //Responsive chart
        //https://medium.com/@louisemoxy/a-simple-way-to-make-d3-js-charts-svgs-responsive-7afb04bc2e4b
      
        .attr("viewBox", `0 0 800 800`)
        .style("margin-left", 10+"%")
        .style("margin-right", 10+"%")

  // Circle
  svg.append('circle')
  .attr('cx', 100)
  .attr('cy', 100)
  .attr('r', 50)
  .attr('stroke', 'black')
  .attr('fill', 'aquamarine');



// Rectangle
svg.append('rect')
  .attr('x', 200)
  .attr('y', 10)
  .attr('width', 600)
  .attr('height', 100)
  .attr('stroke', 'black')
  .attr('fill', 'salmon')

  //line

  svg.append('line')
  .attr('x1', 10)
  .attr('y1', 10)
  .attr('x2', 700)
  .attr('y2', 100)
  .attr('stroke', 'red')


  //Create an area chart
  let data = [{x: 50, y: 20}, {x: 200, y: 150}, {x: 300, y: 100}, {x: 450, y: 20}, {x: 600, y: 130}]

  // prepare a helper function
  let areaChart = d3.area()
                  .x((d)=>{ return d.x })      // Position of both line breaks on the X axis
                  .y1((d)=>{ return d.y })     // Y position of top line breaks
                  .y0(200)                            // Y position of bottom line breaks (200 = bottom of svg area)

  // Add the path using this helper function
  svg.append('path')
    .attr('d', areaChart(data))
    .attr('stroke', 'black')
    .attr('fill', '#69b3a2');


  var circles = svg.selectAll("circles") 
  //var circles = svg.selectAll("null")
    
			.data(data)
			.enter()
			.append("circle")
			.attr("r",10)
			.attr("cx", function(d){
				return d.x;
			})
			.attr("cy", function(d){
				return d.y;
			})
      .style("fill",'aquamarine')
      .style("stroke", "white")
      .style("stroke-width", 2)



//https://www.d3-graph-gallery.com/graph/shape.html
 







