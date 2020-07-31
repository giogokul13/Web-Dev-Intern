var prompt = require("prompt-sync")();
var fs = require("fs");
var http = require("http");
console.log(" this pgm is used to write a data into a file ");
http.createServer(function(request,response){
    let data = prompt(" enter a data here");
    fs.appendFile("sample2.txt", data , function(error){
        response.write("the data written is :" + data );
        console.log("data is written into the  file successfully.."); 
        response.end();  
    });
}).listen(8000);