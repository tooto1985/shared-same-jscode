var $ = window.$
var tools = window.tools
var alert = window.alert
$(function () {
  var checkStatus
  $('input').not("[type='submit']").on('keyup keydown keypress blur change', function () {
    var $this = $(this)
    var chackName = 'check' + $this.attr('name')
    var status = tools[chackName]($this.val())
    $this.css('background-color', status ? 'lightgreen' : 'red')
    checkStatus = checkStatus || {}
    checkStatus[chackName] = status
  })
  $('form').submit(function (e) {
    if (!checkStatus || !Object.keys(checkStatus).map(function (a) {
      return checkStatus[a]
    }).every(function (a) {
      return a === true
    })) {
      alert('輸入內容有誤')
      e.preventDefault()
    }
  })
})
