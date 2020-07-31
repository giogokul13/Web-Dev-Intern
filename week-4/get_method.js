var http  = require("http");
var fs = require("fs");
http.createServer(function(request,response)
{

    if(request.method == "GET")
    {   response.writeHead(200,{"Context-Type" : "text/html"});
        console.log(" the page is requested using  GET method");
        fs.createReadStream("formevents_test.html",{encoding :"UTF-8"},).pipe(response);      
    }
   else if (request.method == "POST")
    {   console.log(" POST method");
        var data = "";
        request.on("data",function(buffer){
            data += buffer;
        });
        request.on("end",function(buffer){
            console.log(data);
        });
        response.end();
    }

}).listen(8080);