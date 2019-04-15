// Data Journalism - D3

// Setup Chart Parameters/Dimensions
var svgWidth = 960;
var svgHeight = 500;

// Set SVG Margins
var margin = {
    top: 60,
    right: 60,
    bottom: 60,
    left: 60
  };

// Define Dimensions of the Chart Area
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG Element/Wrapper - Select Body, Append SVG Area & Set the Dimensions
var svg = d3
  .select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append Group Element & Set Margins - Shift (Translate) by Left and Top Margins Using Transform
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import Data from the data.csv File
d3.csv("assets/data/data.csv", function(error, acsData) {
    if (error) throw error;