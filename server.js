// var http = require("http")
var fs = require("fs")
var chp5 = require ('./src/chapter5Queues')


var data5txt = []
fs.readFile('./src/chapter3files.txt', 'utf8', function(err, data) {
    if (err) throw err;
    data5txt = data
    console.log(data5txt.chp5.toString());
});




// NOTE: EXECUTE this file with node server.js in console
