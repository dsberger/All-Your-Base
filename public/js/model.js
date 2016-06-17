var Model = function(){

  var _activeField;

  var _baseReference = {
    'bin': 2,
    'oct': 8,
    'dec': 10,
    'hex': 16
  };

  var _value = 16;

  this.getUpdate = function() {

    var output = {}

    for(base in _baseReference){
      if(base != _activeField){
        output[base] = _value.toString(_baseReference[base]);
      }
    };

    return output;
  };

  this.setNumber = function(number) {
    _value = number;
  };

  this.getActiveField = function() {
    return _activeField;
  };

  this.setActiveField = function(base) {
    _activeField = base;
  };

  this.clearActiveField = function() {
    _activeField = undefined;
  };

  this.hasActiveField = function() {
    return _activeField !== undefined;
  };

  this.baseList = function() {
    return Object.keys(_baseReference);
  };

};
