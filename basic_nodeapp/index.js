const http = require("http");
const fs = require("fs");

http.createServer(function(req,res){
    let url = req.url;
    res.writeHead(200, { 'Content-Type': 'text/html' })
    if(url=="/" || url=="/index.html"){
        fs.readFile('index.html',function(err,data){
            return res.end(data);
        })
    } else if(url == '/about.html') {
        fs.readFile('about.html', function(err, data) {
            return res.end(data);
        })
    } else if(url == '/contact.html') {
        fs.readFile('contact.html', function(err, data) {
            return res.end(data);
        })
    } else {
        fs.readFile('404.html', function(err, data) {
            return res.end(data);
        })
    }
}).listen(8080);
