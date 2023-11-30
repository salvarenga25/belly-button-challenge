// Created by Salvador Alvarenga
// Note, I couldn't scale it as how is shown in the example. Other than that,
// The dashboard is as close as the example

let url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

//Arrays and html elements to be used for data presentation based from the d3 function
let samples = []
let metadata = []
let sampleNames = []
let selectedSampleData = []
let dropdownMenu = d3.select("#selDataset");
let demoPanel = d3.select("#sample-metadata");


 // Fetch data from the provided URL
 d3.json(url).then(data => {

 // Extract sample data
 samples = data.samples;
 metadata = data.metadata;
 
 // Populate dropdown menu with sample names
 sampleNames = samples.map(sample => sample.id);
 sampleNames.forEach(sample => {
 dropdownMenu.append("option").text(sample).property("value", sample);
 });
 
 // Initial plot with the first sample, Test Subject 940
 let initialSample = sampleNames[0];
 updatePlot(initialSample);


 });


 // Function to update the bar chart based on the selected sample
 function updatePlot(selectedSample) {

    // Find the selected sample
    selectedSampleData = samples.find(sample => sample.id === selectedSample);
 
    // Get the top 10 OTUs
    let top10OTUs = selectedSampleData.otu_ids.slice(0, 10).reverse();
    let top10Values = selectedSampleData.sample_values.slice(0, 10).reverse();
    let top10Labels = selectedSampleData.otu_labels.slice(0, 10).reverse();
 
    // Create horizontal chart trace
    let traceBar = {
      type: "bar",
      orientation: "h",
      x: top10Values,
      y: top10OTUs.map(otu => `OTU ${otu}`),
      text: top10Labels
    };
 
    let layoutBar = {
      xaxis: { title: "OTU Sample Values" }
    };
 
    let dataBar = [traceBar];
 
    // Update the bar chart
    Plotly.newPlot("bar", dataBar, layoutBar);
 
    // Create bubble chart trace
    let traceBubble = {
      x: selectedSampleData.otu_ids,
      y: selectedSampleData.sample_values,
      mode: 'markers',
      marker: {
        size: selectedSampleData.sample_values,
        color: selectedSampleData.otu_ids
        //colorscale: 'Viridis'
      },
      text: selectedSampleData.otu_labels
    };
 
    let layoutBubble = {
      xaxis: { title: "OTU IDs" },
      yaxis: { title: "Sample Values" }
    };
 
    let dataBubble = [traceBubble];
 
    // Update the bubble chart
    Plotly.newPlot("bubble", dataBubble, layoutBubble);
 
    // Clear the demoPanel
    //If we don't use this then the test subject Id will just stack at the change
    demoPanel.html(""); 
    
    //Adding the new data into the demoPanel
    let selectedMetadata = metadata.find(item => item.id == selectedSample);
 

    // Filling the demographic panel
    Object.entries(selectedMetadata).forEach(([key, value]) => {
      demoPanel.append("p").text(`${key}: ${value}`);
    });

  }


// Event listener function when the Test Subject ID changes
function optionChanged(selectedSample) {
    updatePlot(selectedSample);
  }

