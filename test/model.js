var assert = require('chai').assert

var fs = require('fs')
var vm = require('vm')

var code = fs.readFileSync('public/js/model.js')
vm.runInThisContext(code)

describe('Model', function () {
  describe('#getUpdate', function () {
    context('at initialization', function () {
      it('should output a hash with all four bases representing sixteen', function () {
        var model = new (Model)

        var initialUpdate = {
          'bin': '10000',
          'oct': '20',
          'dec': '16',
          'hex': '10'
        }

        assert.deepEqual(initialUpdate, model.getUpdate())
      })
    })

    context('with an updated number', function () {
      it('should output a different hash when the number has been updated to eight in decimal', function () {
        var model = new (Model)
        model.setNumber('8', 'dec')

        var updateHash = {
          'bin': '1000',
          'oct': '10',
          'dec': '8',
          'hex': '8'
        }

        assert.deepEqual(updateHash, model.getUpdate())
      })

      it('should output a different hash when the number has been updated to thirty-two in hex', function () {
        var model = new (Model)
        model.setNumber('20', 'hex')

        var updateHash = {
          'bin': '100000',
          'oct': '40',
          'dec': '32',
          'hex': '20'
        }

        assert.deepEqual(updateHash, model.getUpdate())
      })

      it('should output a different hash when the number has been update to 100 in binary', function() {
        var model = new (Model)
        model.setNumber('100', 'bin')

        var updateHash = {
          'bin': '100',
          'oct': '4',
          'dec': '4',
          'hex': '4'
        }

        assert.deepEqual(updateHash, model.getUpdate())
      })
    })
  })

  describe('#hasActiveInput', function () {
    context('at initialization', function () {
      it('should return false', function () {
        var model = new (Model)
        assert.equal(false, model.hasActiveInput())
      })
    })

    context('when set to true', function () {
      it('should return true', function () {
        var model = new (Model)
        model.setActiveInput()

        assert.equal(true, model.hasActiveInput())
      })
    })

    context('when set to true then reset to false', function () {
      it('should return true', function () {
        var model = new (Model)
        model.setActiveInput()
        model.clearActiveInput()

        assert.equal(false, model.hasActiveInput())
      })
    })
  })

  describe('#baseList', function () {
    it('should return an array of strings', function () {
      var model = new (Model)

      var listOfBases = ['bin', 'oct', 'dec', 'hex']

      assert.deepEqual(listOfBases, model.baseList())
    })
  })
})
