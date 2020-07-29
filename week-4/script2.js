// this script will say hi hello world !!! at port no 8080
var http = require("http");
http.createServer(function(request,respond){
    respond.write("<h1> hi  hello this message is form server </h1> ");
    respond.end();
}).listen(8000);