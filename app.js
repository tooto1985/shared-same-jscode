
var tools = require('./public/tools')
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}))
app.get('/api', function (req, res) {
  console.log(tools.yourfunction())
  res.send(tools.version)
})
app.post('/send', function (req, res) {
  if (tools.checkCName(req.body.CName) && tools.checkNumber(req.body.Number)) {
    res.send('成功')
  } else {
    res.send('失敗')
  }
})
app.listen(process.env.PORT || 3000)
