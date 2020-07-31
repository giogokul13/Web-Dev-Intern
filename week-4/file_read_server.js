var http = require("http");

var fs = require("fs");

http.createServer(function(request,response)
{ 
    fs.readFile("sample2.txt","utf8",function(error,data){
        console.log("file read successfully");
        response.write("the data form the file : ");
        response.write(data);
    });
    response.end();
}).listen(8000);