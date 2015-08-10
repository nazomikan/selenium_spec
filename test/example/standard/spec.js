var assert = require('assert')
  ;

var webdriver = require('selenium-webdriver')
  , test = require('selenium-webdriver/testing')
  ;

var testServer = require('../../../sample_server/server')
  ;

test.describe('testサーバについて', function () {
  var driver
    ;

  test.before(function (done) {
    driver = driver = new webdriver.Builder()
      .forBrowser('chrome')
      .usingServer('http://localhost:4444/wd/hub')
      .build();

    testServer.stop();
    testServer.start(8080, done);
  });

  test.after(function () {
    testServer.stop();
    driver.quit();
  });

  test.describe('localhost:8080/a.html について', function () {
    test.it('titleが Hello World であること', function (done) {
      driver.get('http://localhost:8080/a.html');
      driver.getTitle().then(function (title) {
        assert.equal('Hello World', title);
        done();
      });
    });
  });
});
