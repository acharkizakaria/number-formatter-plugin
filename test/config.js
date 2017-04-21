'use strict';

var path         = require('path');
var fixtures     = require('haraka-test-fixtures');

var _set_up = function (done) {
    this.plugin = new fixtures.plugin('index');
    this.plugin.config = this.plugin.config.module_config(path.resolve('test'));
    done();
};

var default_config = {
    main: {},
    mta1: { ip: "1.1.1.1", host: "host1" },
    mta2: { ip: "2.2.2.2", host: "hos" }
};

exports.plugin_setup = {
    setUp : _set_up,
    'registers': function (test) {
        test.expect(1);
        this.plugin.register();
        test.deepEqual(this.plugin.cfg, default_config); // loaded config
        test.done();
    }
};