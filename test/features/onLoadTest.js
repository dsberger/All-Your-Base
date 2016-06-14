var assert = require('chai').assert;
var app = require('../../../app');
var Browser = require('zombie');

describe('on first loading', function(){

  before(function(){
    this.server = http.createServer(app).listen(4567);
    this.browser = new Browser({site: 'http://localhost:4567'});
  });

  before(function(){
    this.browser.visit('/', done);
  })

  it('should represent sixteen in binary');
  it('should represent sixteen in octal');
  it('should represent sixteen in decimal');
  it('should represent sixteen in hexadecimal');

  after(function(){
    this.server.close(done);
  });
});
