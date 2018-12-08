var data = [
[10, 50, 10, "red"], 
[70, 20, 15, "blue"], 
[80, 60, 20, "green"]
];

function endall(transition, callback) { 
  if (transition.size() === 0) { callback() }
  var n = 0; 
  transition 
    .each(function() { ++n; }) 
    .each("end", function() { if (!--n) callback.apply(this, arguments); }); 
} 

d3.select("#run").on("click", function() {
  d3.select(".container")
    .selectAll("circle")
    .data(data)
    .enter()
    .append('circle')
    // initial values
    .style("fill", function (d) { return d[3]; })
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 5)
    .transition(200)
    // final values for positions
    .attr("cx", function (d) { return d[0]; })
    .attr("cy", function (d) { return d[1]; })
    .call(endall, function() { 
    // previous transition has ended
      d3.selectAll("circle")
      .transition(200)
      .attr("r", function (d) { return d[2]; });
    });
    
});
