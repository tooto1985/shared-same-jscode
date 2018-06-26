
var tools = require('./public/tools')
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}))
app.get('/api', function (req, res) {
  tools.yourfunction()
  res.send(tools.version)
})
app.get('/send', function (req, res) {
  if (tools.checkdata(req.query.num)) {
    res.send('成功')
  } else {
    res.send('失敗')
  }
})
app.listen(process.env.PORT || 3000)
