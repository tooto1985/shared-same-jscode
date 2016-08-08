(function(tools) {
	// Node.js
	if (typeof module === 'object' && module.exports) {
	    module.exports = tools;
	}
	// AMD / RequireJS
	else if (typeof define === 'function' && define.amd) {
	    define([], function () {
	        return tools;
	    });
	}
	// included directly via <script> tag
	else {
		var root = typeof self === 'object' && self.self === self && self || typeof global === 'object' && global.global === global && global || this;
	    root[tools.name] = tools;
	}	
})({
	name:"tools", // global name for via <script> tag
	version: "0.0.2",
	yourfunction: function() {
		console.log("hello world");
	}
});










