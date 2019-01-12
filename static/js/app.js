// from data.js
var tableData = data;

// YOUR CODE HERE!
// Reference table body
var tablebody = d3.select("tbody");

//Loop through data and log each object
function handleFilter(entry) {
    entry.forEach((UFOSighting) => {
        var row = tablebody.append("tr");
        Object.entries(UFOSighting).forEach(([key, value]) => {
            var cell = tablebody.append("td");
            cell.text(value);
        })
    })
}

//Load table onto website
//handleFilter(tableData);


//Select the filter table button
var submit = d3.select("#filter-btn");
console.log(submit);

submit.on("click", function() {
    
    //Prevent Refresh
    d3.event.preventDefault(); 

    //Select input element and get value property of input element
    var inputValue = d3.select("#datetime").property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(UFOSighting => UFOSighting.datetime === inputValue);

    handleFilter(filteredData);
})


