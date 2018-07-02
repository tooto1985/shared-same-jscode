
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
    res.send('成功')
  } else {
    res.send('輸入內容有誤')
  }
})
app.listen(process.env.PORT || 3000)
