//intention is to require this into server.js

var convert = require('xml-js');
var xml = require('fs').readFileSync('./flighdata_A.xml', 'utf8');
var options = {ignoreComment: true, alwaysChildren: true};
var flights = convert.xml2json(xml, options); // or convert.xml2json(xml, options)
console.log(flights);
