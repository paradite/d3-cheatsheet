# D3.js Cheatsheet

## d3.js quick reference sheet

### Table of contents
[Attributes/Styles](#attributesstyles)
[Axis](#axis)
[Time parsing/formatting](#time-parsingformatting)

### Attributes/Styles
```javascript
var svgWrapper = d3.select("body")
  .append("svg")
  .attr("id", "viz")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom);

var container = svgWrapper.append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  .style("pointer-events", "all");
```

#### Attributes/Styles - circle
```javascript
this.attr("r", style.r)
  .attr("fill", style.fill)
  .attr("stroke", style.color)
  .attr("stroke-width", style["stroke-width"])
```

### Axis
```javascript
var xAxis = d3.svg.axis()
  .scale(_xScale)
  .orient("bottom")
  .ticks(4)
  .tickFormat(d3.time.format('%d %b %I%p')) //14 Feb 12AM
  .tickSize(5);
```

### Time parsing/formatting
```javascript
var parseDate = d3.time.format("%Y-%m-%dT%H:%M:%SZ").parse,
  formatDate = d3.time.format("%d %b %H:%M:%S"),
  formatDateForQuery = d3.time.format("%Y-%m-%dT%H:%M:%SZ"),
  formatTime = d3.time.format("%H:%M:%S");
```

