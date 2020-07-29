var file = require("fs");

file.appendFile("testfile","\nthis file is now appended once again",
function(error){
    console.log("file appenedx successfully");
}
)