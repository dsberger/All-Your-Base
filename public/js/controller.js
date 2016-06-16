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

  function markActiveInput(base){
    M.markActiveInput(base);
  }

  function clearActiveInput(){
    M.clearActiveInput();
  };

  function init(){
    V.init(this, M.getBases());
    updateSpans();
  };

  return {
    init: init,
    clearActiveInput: clearActiveInput,
    markActiveInput: markActiveInput
  };

})(AllYourBase.model, AllYourBase.view);
