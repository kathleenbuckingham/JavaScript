// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

// // filter the table according to the date in ufo data 

function tableFilter(arr){
tbody.html("")
arr.forEach(function(ufoSighting) {
console.log(ufoSighting);
var row = tbody.append("tr");
Object.entries(ufoSighting).forEach(function([key, value]) {
console.log(key, value);
//     // Append a cell to the row for each value
//     // in the ufo data 
var cell = row.append("td");
cell.text(value);
});
});
}

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  
//activate the filtered data 
  var filteredData = tableData.filter(ufoSightingobject => ufoSightingobject.datetime === inputValue);
tableFilter(filteredData)
  console.log(filteredData);

});

tableFilter(tableData)


