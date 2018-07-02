
var mongodbUri = "mongodb://127.0.0.1:27017/mydb";
var collectionName = "users";
var Db = require("./db");
var db = new Db(mongodbUri,collectionName);
var tools = require('./public/tools')
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}))
app.get('/version', function (req, res) {
  res.send(`${tools.yourfunction()} ver.${tools.version}`)
})
app.post('/send', function (req, res) {
  if (tools.checkCName(req.body.CName) && tools.checkNumber(req.body.Number)) {
    db.insert({CName:req.body.CName,Number:req.body.Number},function() {
      res.send('成功')
    }, function() {
      res.send('失敗')
    })
  } else {
    res.send('輸入內容有誤')
  }
})
app.listen(process.env.PORT || 3000)
