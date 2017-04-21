// number-formatter
//------------
// documentation via: `haraka -h number-formatter`

var outbound	= require('./outbound');
var constants   = require('haraka-constants');
var ip          = require('ip').address(); //Main ip of local server
var host 	    = require('os').hostname().replace(/\\/, '\\057').replace(/:/, '\\072'); //Server hostname
var cfg;

exports.register = function () {
    var plugin = this;

    plugin.loginfo("number configs are fully loaded from 'number.ini'.");
    cfg = plugin.config.get("number.ini", function () {
        // This closure will be run for each detected update of number.ini
        // Re-run the outer function again
        plugin.register();
    });
    plugin.loginfo(cfg);
};

exports.hook_init_master = exports.hook_init_child = function (next)  {
    server.notes.numbers = [0,1,2,3,4,5,6,7,8,9,host,ip,constants,outbound];
    return next();
};