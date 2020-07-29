var fs = require('fs');

var RS,WS;
RS = fs.createReadStream("sample2.txt",{encoding : "utf8"});
WS = fs.createWriteStream("copy_sample2.txt");
    console.log(" the file is being read");
RS.on("data",function(buffer){
    console.log(" The file is being copied to file : copy_sample2.txt");
    WS.write(buffer);
    console.log(" the file contents are copied Successfully !!!!...");
});
