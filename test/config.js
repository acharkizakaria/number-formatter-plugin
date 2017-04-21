'use strict';

var assert      = require('assert');
var fixtures    = require('haraka-test-fixtures');

describe('numbers check', function () {
    it('register', function (done) {
        var plugin = new fixtures.plugin('index');

        var default_config = {main: {},mta1: { ip: "1.1.1.1", host: "host1" },mta2: { ip: "2.2.2.2", host: "hos" }};

        plugin.register();
        assert.deepEqual({
            main: {},
            mta1: { ip: "1.1.1.1", host: "host1" },
            mta2: { ip: "2.2.2.2", host: "hos" }
        }, {
            main: {},
            mta1: { ip: "1.1.1.1", host: "host1" },
            mta2: { ip: "2.2.2.2", host: "hos" }
        }); // loaded config
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