var express = require("express");
var app = express();
var path = require("path");

var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/api/whoami", function(request, response){
    var ipAddress = request.headers["x-forwarded-for"];
    
    var language = request.headers["accept-language"];
    language = language.split(",");
    language = language[0];
    
    var software = request.headers["user-agent"];
    software = software.split(/[()]+/);
    software = software[1];
    
    response.send({ipAddress: ipAddress, language: language, software: software});
    
})

app.listen(port, function(){
    console.log("app is listening on port");
})