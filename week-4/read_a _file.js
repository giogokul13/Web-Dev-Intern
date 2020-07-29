
// pg to read a file 

var file = require("fs");

file.readFile("testfile","utf8",function(error,data){
    console.log(data);
});
