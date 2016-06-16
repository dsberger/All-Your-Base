var assert = require('chai').assert;

var fs = require('fs');
var vm = require('vm');

var code = fs.readFileSync("public/js/model.js");
vm.runInThisContext(code);


describe('Model', function() {

  describe('#getUpdate', function(){
    context('at initialization', function(){
      it('should output a hash with all four bases representing sixteen', function(){

        var model = new Model;

        var initialUpdate = {
          'bin': '10000',
          'oct': '20',
          'dec': '16',
          'hex': '10'
        };

        assert.deepEqual(initialUpdate, model.getUpdate());
      });
    });

    context('with an updated number', function(){
      it('should output a different hash when the number has been updated to eight', function(){

        var model = new Model;
        model.setNumber(8);

        var updateHash = {
          'bin': '1000',
          'oct': '10',
          'dec': '8',
          'hex': '8'
        };

        assert.deepEqual(updateHash, model.getUpdate());
      });

      it('should output a different hash when the number has been updated to thirty-two', function(){

        var model = new Model;
        model.setNumber(32);

        var updateHash = {
          'bin': '100000',
          'oct': '40',
          'dec': '32',
          'hex': '20'
        };

        assert.deepEqual(updateHash, model.getUpdate());
      });

    });

    context('with an updated active field', function(){
      it('should exclude the active field', function(){
        var model = new Model;
        model.setActiveField('bin');

        var updateHash = {
          'oct': '20',
          'dec': '16',
          'hex': '10'
        };

        assert.deepEqual(updateHash, model.getUpdate());
      });
    });

    context('with an updated then cleared active field', function(){
      it('should output a hash with all four bases representing sixteen', function(){

        var model = new Model;
        model.setActiveField('bin');
        model.clearActiveField();

        var initialUpdate = {
          'bin': '10000',
          'oct': '20',
          'dec': '16',
          'hex': '10'
        };

        assert.deepEqual(initialUpdate, model.getUpdate());
      });
    });
  });

  describe('#getActiveField', function() {
    context('at initialization', function(){
      it('should be undefined', function(){
        var model = new Model;
        assert.equal(undefined, model.getActiveField());
      });
    });

    context('with an updated active field', function(){
      it('should return the set field', function(){

        var model = new Model;
        model.setActiveField('bin');

        assert.equal('bin', model.getActiveField());
      });
    });

    context('with an updated then cleared active field', function(){
      it('should be undefined', function(){
        var model = new Model;
        model.setActiveField('bin');
        model.clearActiveField();

        assert.equal(undefined, model.getActiveField());
      });
    });
  });

  describe('#hasActiveField', function() {
    context('at initialization', function(){
      it('should return true', function(){
        var model = new Model;
        assert.equal(false, model.hasActiveField());
      });
    });

    context('with an updated active field', function(){
      it('should return true', function(){
        var model = new Model;
        model.setActiveField('bin');

        assert.equal(true, model.hasActiveField());
      });
    });

    context('with an updated then cleared active field', function(){
      it('should return true', function(){
        var model = new Model;
        model.setActiveField('bin');
        model.clearActiveField();

        assert.equal(false, model.hasActiveField());
      });
    });
  });
});
