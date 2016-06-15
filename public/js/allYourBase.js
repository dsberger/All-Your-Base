var AllYourBase = {};

AllYourBase.model = (function(){

  var bases = {
    bin: 2,
    oct: 8,
    dec: 10,
    hex: 16
  };

  var number = 16;

  var activeInput = undefined;

  function markActiveInput(span) {
    activeInput = span;
  };

  function clearActiveInput(){
    activeInput = undefined;
  };

  function inputIsActive(){
    return activeInput !== undefined;
  };

  function setNumber(newNumber){
    number = newNumber;
  };

  function getUpdateHash(){
    var output = {};

    for (base in bases) {
      if(activeInput !== base){
        output[base] = number.toString(bases[base]);
      }
    };

    return output;
  };

  return {
    setNumber: setNumber,
    getUpdateHash: getUpdateHash,
    markActiveInput: markActiveInput,
    clearActiveInput: clearActiveInput,
    inputIsActive: inputIsActive
  };

})();

AllYourBase.view = (function(){

  function swapSpanForInput(id){
    var span = document.getElementById(id)
    span.style.display = "none";
    var parent = span.parentElement

    var input = document.createElement("input");
    input.type = "text";
    input.id = id + "-input"
    input.value = span.innerText;

    parent.appendChild(input);
  };

  function updateSpanText(hash) {
    for(base in hash){
      var span = document.getElementById(base);
      span.innerText = hash[base];
    }
  };

  function init(hash){
    updateSpanText(hash);
    var decSpan = document.getElementById('dec');

    decSpan.onclick = function(){
      swapSpanForInput('dec');
    };
  };

  return {
    init: init
  };

})();

AllYourBase.controller = (function(model, view){

  function updateSpans(){
    view.init(model.getUpdateHash());
  };

  function dirtyLoop(){
    while(model.inputIsActive()){
      updateSpans();
      console.log("spans updated");
    }
  }

  function init(){
    updateSpans();
    dirtyLoop();
  };

  return {
    init: init
  };

})(AllYourBase.model, AllYourBase.view);

window.onload = function(){
  AllYourBase.controller.init();
};
