var AllYourBase = AllYourBase || {};

AllYourBase.controller = (function(M, V){

  function updateSpans(){
    V.updateFieldValues(M.getUpdateHash());
  };

  function dirtyLoop(){
    setInterval(function(){
      if(M.inputIsActive){
        updateSpans();
      }
    }, 100);
  };

  function setActiveInput(base){
    M.activeInput.set(base);
  }

  function clearActiveInput(){
    M.activeInput.clear();
  };

  function init(){
    V.init(this, M.getBases());
    updateSpans();
  };

  return {
    init: init,
    clearActiveInput: clearActiveInput,
    setActiveInput: setActiveInput
  };

})(AllYourBase.model, AllYourBase.view);
