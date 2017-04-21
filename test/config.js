'use strict';

var assert      = require('assert');
var fixtures    = require('haraka-test-fixtures');

/*
 var _set_up = function (done) {
 this.plugin = new fixtures.plugin('index');
 this.plugin.config = this.plugin.config.module_config(path.resolve('test'));
 done();
 };
 */

/*
 exports.plugin_setup = {
 setUp : _set_up,
 'registers': function (test) {
 test.expect(1);
 this.plugin.register();
 test.deepEqual(this.plugin.cfg, default_config); // loaded config
 test.done();
 }
 };*/

describe('numbers check', function () {
    it('register', function (done) {
        var plugin = new fixtures.plugin('index');

        var default_config = {
            main: {},
            mta1: { ip: "1.1.1.1", host: "host1" },
            mta2: { ip: "2.2.2.2", host: "hos" }
        };

        plugin.register();
        assert.deepEqual(this.plugin.cfg, default_config); // loaded config
        done();
    });

    it('loads number.ini', function (done) {
        done();
    });

    it.skip('mocks up a wss socket', function (done) {
        done();
    });

    it.skip('inherits from haraka-plugin-redis', function (done) {
        done();
    });

    it.skip('mocks up a connection', function (done) {
        done();
    });

    it.skip('saves some results', function (done) {
        done();
    });

    it.skip('sees those results via redis connection subscription', function (done) {
        done();
    });
});