var fs = require('fs');
// create  a read stream to read data in chunck format ...
var RS = fs.createReadStream("sample.txt",{ encoding : "utf8" });
RS.on( "data",function(buffer){
    console.log("data recieved");
});