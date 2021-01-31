//using express
const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const port = 8080;

//Using Path and accessing the public folder template loading of the website was done with the middleware

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

//Below is the code for just using the basic app without the css 

/* app.get("/", (req, res) => {
  fs.readFile("index.html", function (err, data) {
    return res.end(data);
  });
});
app.get("/index.html", (req, res) => {
  fs.readFile("index.html", function (err, data) {
    return res.end(data);
  });
});
app.get("/about.html", (req, res) => {
  fs.readFile("about.html", function (err, data) {
    return res.end(data);
  });
});
app.get("/contact.html", (req, res) => {
  fs.readFile("contact.html", function (err, data) {
    return res.end(data);
  });
});
app.get("*", function (req, res) {
  fs.readFile("404.html", function (err, data) {
    return res.end(data);
  });
}); */



//Using http 

/* const http = require("http");
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
 */
