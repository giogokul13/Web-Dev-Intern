var prompt = require("prompt-sync")();
var fs = require("fs");
var http = require("http");
console.log(" this pgm is used to write a data into a file ");
http.createServer(function(request,response){
    let data = prompt(" enter a data here");
    fs.writeFile("sample2.txt", data , function(error){
        console.log("data is written into the file  successfully..");
        response.write("the data written is :"  + data);
        response.end(); 
    });
   
}).listen(8000);