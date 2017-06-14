// var http = require("http")
var fs = require("fs")

fs.readFile('./src/chapter3files.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});


// NOTE: EXECUTE this file with node server.js in console
