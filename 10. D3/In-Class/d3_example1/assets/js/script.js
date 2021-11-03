d3.select("body").style("background-color","black");
d3.selectAll("p").style("color","white");

d3.selectAll("p").style("color", () => {
    return `hsl( ${Math.random() * 360 } ,100%,50%)`;
  });

d3.selectAll("p")
    .data([16, 24, 32, 48])
    .style("font-size", (d)=>{
        return d+ "px";
    });


d3.select("body").selectAll("p")
.data(["Awesome right?", "Some Other text", "Even More", "The End"])
.text((d)=>{
    return d;
});


let svg= d3.select("#chart").append("svg")
// .attr("width", 800)
// .attr("height", 800)

.attr("viewBox", `0 0 800 800`)
.style('margin-left', 10+'%')
.style('margin-right', 10+'%')
.style("background-color","dimgray")


svg.append('circle')
.attr("cx",100)
.attr("cy",100)
.attr('r',50)
.attr('fill','gold')
.attr("stroke",'black')

svg.append('rect')
.attr('x',200)
.attr('y',10)
.attr('width', 500)
.attr('height', 60)
.attr('fill','salmon')

svg.append('line')
.attr('x1', 10)
.attr('y1',10)
.attr('x2', 700)
.attr('y2',700)
.attr('stroke','red')
.style('stroke-width',3)



let data = [

    {x:100, y:220},
    {x:200, y:350},
    {x:300, y:300},
    {x:400, y:250},
    {x:400, y:320},
    {x:600, y:270}
]

let areaChart = d3.area()
                    .x((d)=>{ return d.x})
                    .y1((d)=>{ return d.y})
                    .y0(500)

svg.append('path')
    .attr('d', areaChart(data))
    .attr("stroke",'black')
    .attr('fill', 'grey')

let circles = svg.selectAll("circles")

    .data(data)
    .enter()
    .append('circle')
    .attr('r',10)
    .attr('cx', (d)=>{ return d.x})
    .attr('cy', (d)=>{ return d.y})
    .style("fill","aquamarine")
    .style('stroke','white')
    .style('stroke-width',2)


