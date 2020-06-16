// from data.js
var tableData = data;

// select the table body
var tbody = d3.select("tbody");

// Add data to table
tableData.forEach(function(alienSighting) {
    var row = tbody.append("tr");
    Object.entries(alienSighting).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
});

// select the button
var button = d3.select("#filter-btn")

// select the form
var form = d3.select("form-group")

// Create event handlers 
button.on("click", filterTable);
form.on("submit",filterTable);

// Complete the event handler function for the form
function filterTable() {
  console.log("button clicked")

  // Select date box element
  var dateBox = d3.select("#datetime");

  // Get the value from the date box
  var inputValue = dateBox.property("value");
  console.log(inputValue);

  // Filter the data by the value from the date box
  function dataFilter (alienSighting) {
    return alienSighting.datetime === inputValue
  }
  var filteredData = tableData.filter(dataFilter)
  console.log(filteredData)

  // clear data from the table
  tbody.html("")

  // Add filtered data to table
  filteredData.forEach(function(alienSighting) {
    var row = tbody.append("tr");
    Object.entries(alienSighting).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });

};
