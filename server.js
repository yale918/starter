var http = require("http");
var fs = require("fs");
var mime = require("mime");

const port = 8787;


const server = http.createServer(function(req,res){
    console.log("[log]req for: "+ req.url);
    var path = "";
    if(req.url == "/")  path = "."+req.url+"index.html";
    else                path = "."+req.url;

    fs.readFile(path,function(err,data){
        if(err) console.log(err);
        else{
            res.writeHead(200,mime.lookup(path));
            res.write(data);
            res.end();
        }
    });
});

server.listen(port,function(){
    console.log("server is listening port: "+port);
});

