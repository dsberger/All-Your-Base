var View = function(){

  var bases, C;

  function element(base, io) {
    return document.getElementById(base + "-" + io);
  }

  function swapVisibility(turnOff, turnOn){
    turnOff.style.display = "none";
    turnOn.style.display = "inline";
    turnOn.focus();
  }

  function attachClickListener(base, inElement, outElement){
    outElement.onclick = function(){
      C.setActiveInput(base);
      closeAllInputs();
      swapVisibility(outElement, inElement);
    }
  };

  function attachEnterListener(base, inElement, outElement){
    inElement.onkeydown = function(e){
      if(e.keyCode === 13){
        C.clearActiveInput();
        swapVisibility(inElement, outElement);
      }
    };
  };

  function closeAllInputs(){
    bases.forEach(function(base){
      var inElement = element(base, "input");
      var outElement = element(base, "output");
      swapVisibility(inElement, outElement)
    })

  };

  this.updateFieldValues = function(hash){
    for(base in hash){
      element(base, "output").innerText = hash[base];
      element(base, "input").value = hash[base];
    }
  };

  this.init = function(controller, modelBases){

    C = controller
    bases = modelBases

    bases.forEach(function(base){
      var outElement = element(base, "output");
      var inElement = element(base, "input");

      attachClickListener(base, inElement, outElement);
      attachEnterListener(base, inElement, outElement);
    });
  };
};
