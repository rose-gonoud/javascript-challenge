// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("#UFOtbody");

// Console.log the data from data.js
console.log(data);

// More verbose solution:

// Step 1: Loop Through `data` and console.log each object
// data.forEach(function(alienReport) {
//     console.log(alienReport);
//     // appending the <tr> elements
//     var row = tbody.append("tr");
//     // checking the itertion over each value
//     Object.entries(alienReport).forEach(function([key, value]) {
//         console.log(key, value);
//     // Append a cell to the row for each value in the alien report objects
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

// Cool arrow function solution:

data.forEach((alienReport) => {
    var row = tbody.append("tr").attr("class", "ephemeral");
    Object.entries(alienReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});


// reference to the button's ID
var button = d3.select("#filter-btn");
// reference to the input element thru its ID
var inputField = d3.select("#datetime");

// click handler signals click was registered w/ console text
button.on("click", function() {
    console.log("new search date incoming!");
    var inputDate = inputField.property("value");
    // logs the input date for testing purposes
    console.log("inputDate", inputDate);
    // created a variable to hold all objects that meet the filtering criteria
    console.log("data", data);
    var filteredData = data.filter(datum => datum.datetime === inputDate);
    console.log("filteredData", filteredData);
    // clears all previous table entries
    d3.selectAll(".ephemeral").remove();
  
    filteredData.forEach((alienReport) => {
        var row = tbody.append("tr").attr("class", "ephemeral");
        Object.entries(alienReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});