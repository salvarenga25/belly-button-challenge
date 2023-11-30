let url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'



// d3.json(url).then(data => {

// // Extract sample data
// let samples = data.samples;

// // Get dropdown menu
// let dropdownMenu = d3.select("#selDataset");

// // Populate dropdown menu with sample names
// let sampleNames = samples.map(sample => sample.id);
// sampleNames.forEach(sample => {
//   dropdownMenu.append("option").text(sample).property("value", sample);
// });

// console.log(samples)




// console.log("Hello")

// // function init(){
// //     data = [{
// //         x:[],
// //         y:[],    
// //     }]
// //     Plotly.newPlot("plot", data)
// // }
// const data1 = d3.json(url)


// // for (let i = 0; i < data.length; i++){
// //     console.log(data['metadata'][i])
// // }
// test1 = data1.samples
// console.log(data1.samples)
// //allGroup = d3.map(data1, function(d){return(d.name)}).keys()
// d3.json(url).then( function(data){
//     console.log(data)
// })

// console.log(test1['metadata'])
// console.log(typeof test1)
// d3.selectAll("#selDataSet").on("change",updatePlotly)

// function updatePlotly() {
//     let dropdownMenu = d3.select("#selDataSet");

//     let dataset = dropdownMenu.property("value");

//     let x = [];
//     let y = [];

//     if (dataset == 's'){
//         x = []
//         y = []
//     }

//     Plotly.restyle("plot","x",[x]);
//     Plotly.restyle("plot","y",[y]);
// }

// init();

// }






//Create an array of each country's numbers
//let australia = Object.values(data.australia)


//let labels = Object.keys(data.australia)



// let books = ["The Visual display of Quant information","Automate the Boring stuff","Data Science from Sratch"]
// let timesRead = [100,50,25]
// //Assign x and y values for the plotly trace obj
// let trace1 = {
//     x : books,
//     y : timesRead,
//     type:'bar'
// };

// //LEAVE THE CODE BELOW UNCHANGED
// let data = [trace1];

// let layout = {
//     title: "Simple Bar Chart"
// };

// let greekNames=[]
// let romanNames=[]
// let greekSearchResults=[]
// let romanSearchResults=[]

// let trace2 = {
//     x:names,
//     y: greekSearchResults,
//     text: "Greek",
//     type:"bar"
// };


// let layout2 = {
//     title:"bla bla",
//     barmode: "group",
//     margin:{
//         l : 50,
//         r : 50,
//         b : 200,
//         t : 50,
//         pad : 44 
//     }
// };

// Plotly.newPlot("plot", data, layout);

// //let movies = require('/another.js')


// for (let i = 0; i < searchResults.length; i++){
//     row = serchResults[i];
//     names.push(row.pair);
//     greekNames.push(row.greekName);
//     romanNames.push(row.romanName);
//     greekSearchResults.push(row.greekSearchResults)
//     romanSearchResults.push(row.romanSearchResults)

// }

// //Mapping over an array of objects

// let students = [
//     {name:"Malcolm", score:80},
//     {name:"Zoe", score: 85},
//     {name: "Kaylee", score: 99},
//     {name: "Wash", score: 79}
// ];

// let stname = students.map(function (item){
//     return item.score;
// });

// console.log(stname)



// d3.json(url).then(data => {

//       let samples = data.samples;
//       let metadata = data.metadata;
//       console.log(metadata)
//       //Drop-down menu
//       let dropdownMenu = d3.select("#selDataset");

//       //appending new Test Subject ID to the list     
//       let sampleNames = samples.map(sample => sample.id);
//       sampleNames.forEach(sample => {
//         dropdownMenu.append("option").text(sample).property("value", sample);
//       });

//       // Initial plot with the first sample
//       let initialSample = sampleNames[0];
//       updatePlot(initialSample);

//       function updatePlot(selectedSample) {

//         let demoInfo = d3.select("#sample-metadata")
//         // Function to update the bar chart based on the selected sample
//         let selectedMetadata = metadata.find(item => item.id == selectedSample);
  
//           // Display each key-value pair from the metadata JSON object
//           Object.entries(selectedMetadata).forEach(([key, value]) => {
//             demoInfo.append("<td>").text(`${key}: ${value}`);
//           });
  
//         // Find the selected sample
//           let selectedSampleData = samples.find(sample => sample.id === selectedSample);
  
//           // Get the top 10 OTUs
//           let top10OTUs = selectedSampleData.otu_ids.slice(0, 10).reverse();
//           let top10Values = selectedSampleData.sample_values.slice(0, 10).reverse();
//           let top10Labels = selectedSampleData.otu_labels.slice(0, 10).reverse();
  
//           let metad = data.metadata
//           console.log(metad)
//           // Create horizontal bar chart
//           let trace = {
//             type: "bar",
//             orientation: "h",
//             x: top10Values,
//             y: top10OTUs.map(otu => `OTU ${otu}`),
//             text: top10Labels
//           };
  
//           let layout = {
//             title: `Top 10 OTUs for Sample ${selectedSample}`,
//             xaxis: { title: "Sample Values" }
//           };
  
//           let data = [trace];
  
//           // Update the bar chart
//           Plotly.newPlot("bar", data, layout);
//       }

//       // Event listener for dropdown menu changes
//       function optionChanged(selectedSample) {
//         updatePlot(selectedSample);
//       }
//       console.log(data)
//     },
//     (error) => {
//         console.log(error)
//     }
//     );

//Arrays to be used for data presentation based from the d3 function
let samples = []
let metadata = []
let sampleNames = []
let dropdownMenu = d3.select("#selDataset");
let selectedSampleData = []


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
 
 // Initial plot with the first sample
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
 
    // Create horizontal bar chart
    let traceBar = {
      type: "bar",
      orientation: "h",
      x: top10Values,
      y: top10OTUs.map(otu => `OTU ${otu}`),
      text: top10Labels
    };
 
    let layoutBar = {
      title: `Top 10 OTUs for Sample ${selectedSample}`,
      xaxis: { title: "Sample Values" }
    };
 
    var dataBar = [traceBar];
 
    // Update the bar chart
    Plotly.newPlot("bar", dataBar, layoutBar);
 
    // Create bubble chart
    let traceBubble = {
      x: selectedSampleData.otu_ids,
      y: selectedSampleData.sample_values,
      mode: 'markers',
      marker: {
        size: selectedSampleData.sample_values,
        color: selectedSampleData.otu_ids,
        colorscale: 'Viridis'
      },
      text: selectedSampleData.otu_labels
    };
 
    let layoutBubble = {
      title: `Bubble Chart for Sample ${selectedSample}`,
      xaxis: { title: "OTU IDs" },
      yaxis: { title: "Sample Values" }
    };
 
    let dataBubble = [traceBubble];
 
    // Update the bubble chart
    Plotly.newPlot("bubble", dataBubble, layoutBubble);
 
    // Display sample metadata
    var metadataPanel = d3.select("#sample-metadata");
    metadataPanel.html(""); // Clear existing content
 
    var selectedMetadata = metadata.find(item => item.id == selectedSample);
 
    // Display each key-value pair from the metadata JSON object
    Object.entries(selectedMetadata).forEach(([key, value]) => {
      metadataPanel.append("p").text(`${key}: ${value}`);
    });
  }


// Event listener for dropdown menu changes
function optionChanged(selectedSample) {
    updatePlot(selectedSample);
  }

