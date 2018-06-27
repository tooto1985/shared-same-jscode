(function (tools) {
  if (typeof module === 'object' && module.exports) { // Node.js
    module.exports = tools
  } else if (typeof define === 'function' && define.amd) { // AMD / RequireJS
    define([], function () {
      return tools
    })
  } else { // included directly via <script> tag
    var root = typeof self === 'object' && self.self === self && self || typeof global === 'object' && global.global === global && global || this
    root[tools.name] = tools
  }
})({
  name: 'tools', // global name for via <script> tag
  version: '0.0.2',
  yourfunction: function () {
    return 'hello world'
  },
  checkCName: function (value) {
    return value && /^[\u4e00-\u9fa5]{2,4}$/.test(value)
  },
  checkNumber: function (value) {
    return value && /^[0-9]*$/.test(value)
  }
})
