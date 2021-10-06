
//Buffer module
var buf = Buffer.from('abc');
const mymod=require('../mymodule')
console.log(buf);
console.log(mymod.name)
console.log("hello")

//http module
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8091);


//os module
var os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());


//path module
var path = require('path');
var directories = path.dirname('/Users/Refsnes/demo_path.js');
console.log(directories);


//util module
var util = require('util');
var txt = 'Congratulate %s on his %dth birthday!';
var result = util.format(txt, 'Linus', 6);
console.log(result);

//url module
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); 
console.log(q.pathname);
console.log(q.search);

var qdata = q.query; 
console.log(qdata.month);
console.log(qdata.year);