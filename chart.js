
d3.csv('sp500.csv', function (data) {

  var margin = {top: 25, right: 0, bottom: 20, left: 40};
  var w = 800 - margin.left - margin.right,
    h = 600 - margin.top - margin.bottom;

  var svg = d3.select('#chart').append('svg')
    .attr('width', w + margin.left + margin.right)
    .attr('height', h + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

  var xScale = d3.scale.ordinal()
    .domain(data.map(function (d) { return d.date; }))
    .rangeBands([0, w], 0.1, 0);

  var yScale = d3.scale.linear()
    .domain([0, d3.max(data, function (d) { return +d.price; })])
    .range([h, 0]);

  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', function (d) {
      return xScale(d.date);
    })
    .attr('width', xScale.rangeBand())
    .attr('y', function (d) {
      return yScale(+d.price);
    })
    .attr('height', function (d) {
      return h - yScale(+d.price);
    });

})
