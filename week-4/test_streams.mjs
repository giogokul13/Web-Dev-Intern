import { createReadStream, createWriteStream } from "fs";

var RS = createReadStream("sample2.txt",{ encoding : "utf8" });
var Ws = createWriteStream("sample2.txt");
console.log("the file is being read ......");

console.log(" the file contents are.....");

RS.on("data",function(buffer){
    console.log(buffer);
});

Ws.write(" the data  written here is overlapped");
console.log("the file content is replaced !!!..");

