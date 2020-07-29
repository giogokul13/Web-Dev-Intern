var file = require("fs");

file.unlink("testfile",function(error){
    console.log("file deleted succesfully");
});