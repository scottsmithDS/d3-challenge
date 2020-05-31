var svgWidth = 900;
var svgHeight = 1000;


var margin = {
    top: 20,
    right: 40,
    bottom: 80,
    left: 100
  };
  

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);


d3.csv("/js/data.csv").then((data) => {
  console.log(data);
  console.log([data]);

  data.forEach((data) => {

    data.id = +data.id;
    data.state = data.state;
    data.abbr = data.abbr;
    data.poverty = +data.poverty;
    data.povertyMoe = +data.povertyMoe;
    data.age = +data.age;
    data.ageMoe = +data.ageMoe;
    data.income = +data.income;
    data.incomeMoe = +data.incomeMoe;
    data.healthcare = +data.healthcare;
    data.healthcareLow = +data.healthcareLow;
    data.healthcareHigh = +data.healthcareHigh;
    data.obesity = +data.obesity;
    data.obesityLow = +data.obesityLow;
    data.obesityHigh = +data.obesityHigh;
    data.smokes = +data.smokes;
    data.smokesLow = +data.smokesLow;
    data.smokesHigh = +data.smokesHigh;
    console.log(data)
  });

var healthcaremax = d3.max(data, d => d.healthcare)
var chosenymax = healthcaremax
var healthcaremin = d3.min(data, d => d.healthcare)
var chosenymin = healthcaremin
var povertymax = d3.max(data, d => d.poverty)
var chosenxmax = povertymax
var povertymin = d3.min(data, d => d.poverty)
var chosenxmin = povertymin
var healthcaremaxl = d3.max(data, d => d.healthcareLow)
var chosenymaxl = healthcaremaxl
var healthcareminl = d3.min(data, d => d.healthcareLow)
var chosenyminl = healthcareminl
var povertymaxl = d3.max(data, d => d.povertylow)
var chosenxmaxl = povertymaxl
var povertyminl = d3.min(data, d => d.povertylow)
var chosenxminl = povertyminl



var yLinearScale1 = d3.scaleLinear()
.domain([`${chosenymin}`- 1, `${chosenymax}` + 1])
.range([height, 0]);

var yLinearScale2 = d3.scaleLinear()
.domain([ `${chosenxmin}` - 1, `${chosenxmax}` + 1] )
.range([0,width]);





var bottomAxis = d3.axisBottom(yLinearScale2)
var leftAxis = d3.axisLeft(yLinearScale1);


chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

chartGroup.append("g")
    // Define the color of the axis text
    

    .call(leftAxis);


chartGroup.append('g')
    .selectAll("scatter")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function (data) { return yLinearScale2(data.poverty); } )
    .attr("cy", function (data) { return yLinearScale1(data.healthcare); } )
    .attr("r", 7)
    .style("fill", "#69b3a2")




chartGroup.selectAll(null)
    .data(data).enter().append("text")
    .attr("x", function (data) { return yLinearScale2(data.poverty); } )
    .attr("y", function (data) { return yLinearScale1(data.healthcare); } )
    .text(function(data) {
        return data.abbr;
      })
    .attr("font-family", "sans-serif")
    .attr("font-size", "5px")
    .attr("text-anchor", "middle")
    .attr("fill", "white");


chartGroup.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0 - margin.left + 40)
  .attr("x", 0 - (height / 1.25))
  .attr("dy", "1em")
  .attr("class", "axisText")
  .text("Lacks Healthcare (%)");

chartGroup.append("text")
  .attr("transform", `translate(${width / 2.5}, ${height + margin.top + 30})`)
  .attr("class", "axisText")
  .text("In Poverty (%)");








      

    })





  // Create a function to parse date and time
  // Format the data

  
    // Cast each hours value in tvData as a number using the unary + operator
  //  tvData.forEach(function(data) {
    //  data.hours = +data.hours;
   //   console.log("Name:", data.name);
   //   console.log("Hours:", data.hours);
  //  });
//  }).catch(function(error) {
  //  console.log(error);
 // });
 