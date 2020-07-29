var fs = require('fs');

var RS,WS;
RS = fs.createReadStream("sample2.txt",{encoding : "utf8"});
WS = fs.createWriteStream("copy_sample2.txt");
console.log(" the file is being read");
RS.pipe(WS);
console.log(" THE FILE COIPED SUCCESSFULLY !!!!!....")