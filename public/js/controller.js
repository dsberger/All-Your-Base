var Controller = function (M, V) {
  function updateSpans () {
    V.updateFieldValues(M.getUpdate())
  };

  // function dirtyLoop(){
  //   setInterval(function(){
  //     if(M.inputIsActive){
  //       updateSpans();
  //     }
  //   }, 100);
  // };

  this.setActiveInput = function (base) {
    M.setActiveField(base)
  }

  this.clearActiveInput = function () {
    M.clearActiveField()
  }

  this.init = function () {
    V.init(this, M.baseList())
    updateSpans()
  }
}
