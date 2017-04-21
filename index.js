// number-formatter-plugin
//------------
// documentation via: `haraka -h number-formatter-plugin`

//var outbound	= require('./outbound');
//var constants   = require('haraka-constants');
//var ip          = require('ip').address(); //Main ip of local server
//var host 	    = require('os').hostname().replace(/\\/, '\\057').replace(/:/, '\\072'); //Server hostname
var cfg;

exports.register = function () {
    var plugin = this;

    cfg = plugin.config.get("number.ini", function () {
        plugin.register();
    });
};