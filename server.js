//abstract these 4 lines for converting xml into separate file
var convert = require('xml-js');
var xml = require('fs').readFileSync(__dirname + '/flighdata_A.xml', 'utf8');
var options = {compact: true};
var flights = convert.xml2js(xml, options); // or convert.xml2json(xml, options)

const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());

// app.get('/airport/:id', function (req, res){
//   const airport = req.params.id;
//   const filteredFlights = flights.filter((flight) => {
//     flight["-depair"] = id;
//   })
//   res.send(filteredFlights)
// });



app.get('/', function (req, res) {
  res.send(JSON.stringify(flights.flights.flight))
});


app.listen(3000, function () { // NEW
  console.log('App running on port 3000');
});
