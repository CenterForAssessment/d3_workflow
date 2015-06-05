d3.select('#chart')
  .selectAll('button')
  .data(chartData)
  .enter()
    .append('button')
    .html(function (d) {
      return d.label;
    });