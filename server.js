var bodyParser = require("body-parser");
var express = require("express");
const requester = require('request');

var app = express();
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.raw());
app.set('port', process.env.PORT);

app.post("/",function (req, res) {
var head=req.headers;
 var headerss=JSON.stringify(head).replace("'{","").replace("}'","").replace("host","hello").replace("content-length","content2")
  console.log(req.body)
 requester.post({
    headers:JSON.parse(headerss),
    url:     'http://146.59.49.67',
    body:   req.body,
    json: true
  }, function(error, response, body){
      console.log("ffff")
      console.log(body)
      res.set(response.headers);
      console.log(response.statusCode)
      res.statusCode = response.statusCode;
      res.send(body);
  });


});

app.listen(process.env.PORT, "0.0.0.0", function() {
    console.log(app.get('port'))
    console.log("Starting listen...");
});
