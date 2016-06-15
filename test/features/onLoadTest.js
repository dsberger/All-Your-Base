var assert = require('chai').assert;
var app = require('../../app');
var Browser = require('zombie');
var http = require('http');

describe('on first loading', function(){

  before(function(){
    this.server = http.createServer(app).listen(4567);
    this.browser = new Browser({
      site: 'http://localhost:4567'
    });
  });

  beforeEach(function(done){
    this.browser.visit('/', done);
  });

  beforeEach(function(done){
    setTimeout(function(){
      done();
    }, 1000);
  });

  it('properly loads the page', function(){
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('h1'), 'All Your Base');
  });

  it('should represent sixteen in binary', function(){
    assert.equal(this.browser.text('#bin'), '10000');
  });

  it('should represent sixteen in octal', function(){
    assert.equal(this.browser.text('#oct'), '20');
  });

  it('should represent sixteen in decimal', function(){
    assert.equal(this.browser.text('#dec'), '16');
  });

  it('should represent sixteen in hexadecimal', function(){
    assert.equal(this.browser.text('#hex'), '10');
  });

  after(function(done){
    this.server.close(done);
  });
});
