var http = require('http');
http.createServer(function(req,res)
{
    res.write(" <h1>hi this is  running from server </h1>");
    res.end();
})
.listen(8000);
