// @TODO: YOUR CODE HERE!
// Load data from hours-of-tv-watched.csv
console.log("connected")
d3.csv("../data/data.csv").then(function(data) {

    console.log(data);
  
    // log a list of names
    var healthcare = data.map(data => data.healthcare);
    var poverty = data.map(data => data.poverty);
    var smokers = data.map(data => data.smokers);
    var age = data.map(data => data.age);
    console.log("healthcare", healthcare);

});
  
    // Cast each hours value in tvData as a number using the unary + operator
  //  tvData.forEach(function(data) {
    //  data.hours = +data.hours;
   //   console.log("Name:", data.name);
   //   console.log("Hours:", data.hours);
  //  });
//  }).catch(function(error) {
  //  console.log(error);
 // });
  