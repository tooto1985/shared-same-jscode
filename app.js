var tools = require("./public/tools");
var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname, "public")));
app.get("/api", function(req, res) {
	tools.yourfunction();
    res.send(tools.version);
});
app.listen(process.env.PORT || 3000);