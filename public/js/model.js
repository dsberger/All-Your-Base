var Model = function () {
  var _activeInput = false

  var _baseReference = {
    'bin': 2,
    'oct': 8,
    'dec': 10,
    'hex': 16
  }

  var _value = 16

  this.getUpdate = function () {
    var output = {}

    for (var base in _baseReference) {
      output[base] = _value.toString(_baseReference[base])
    };

    return output
  }

  this.setNumber = function (numberStr, baseName) {
    _value = parseInt(numberStr, _baseReference[baseName])
  }

  this.setActiveInput = function () {
    _activeInput = true
  }

  this.clearActiveInput = function () {
    _activeInput = false
  }

  this.hasActiveInput = function () {
    return _activeInput
  }

  this.baseList = function () {
    return Object.keys(_baseReference)
  }

  this.incrementValue = function () {
    _value++
  }

  this.decrementValue = function () {
    _value--
  }
}
