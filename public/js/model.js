var AllYourBase = AllYourBase || {};

AllYourBase.model = (function(){

  var BASES = {
    bin: 2,
    oct: 8,
    dec: 10,
    hex: 16
  };

  var number = 16;

  var activeInput = undefined;

  function setActiveInput(base) {
    activeInput = base;
  };

  function getActiveInput(){
    return activeInput;
  };

  function clearActiveInput(){
    activeInput = undefined;
  };

  function isInputActive(){
    return activeInput !== undefined;
  };

  function getBases(){
    return Object.keys(BASES);
  }

  function setNumber(newNumber){
    number = newNumber;
  };

  function getUpdateHash(){
    var output = {};

    for (base in BASES) {
      if(activeInput !== base){
        output[base] = number.toString(BASES[base]);
      }
    };

    return output;
  };

  return {
    setNumber: setNumber,
    getUpdateHash: getUpdateHash,
    markActiveInput: markActiveInput,
    clearActiveInput: clearActiveInput,
    inputIsActive: inputIsActive,
    getBases: getBases
  };

})();
