let file = require("fs");

file.writeFile("testfile",'console.log("this file is used to test the file opertaions in the node FS")',
function(error){
    console.log(" file is written succesfully ");
})