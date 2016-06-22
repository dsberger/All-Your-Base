var Controller = function (M, V) {
  function updateSpans () {
    V.updateFieldValues(M.getUpdate())
  };

  function dirtyLoop () {
    setInterval(function () {
      if (M.hasActiveInput()) {
        updateSpans()
        var activeInput = V.getActiveInputElement()
        var base = activeInput.id.slice(0, 3)
        var number = activeInput.value
        M.setNumber(number, base)
      }
    }, 100)
  };

  this.incrementValue = function () {
    M.incrementValue()
    updateSpans()
  }

  this.decrementValue = function () {
    M.decrementValue()
    updateSpans()
  }

  this.setActiveInput = function () {
    M.setActiveInput()
    dirtyLoop()
  }

  this.clearActiveInput = function () {
    M.clearActiveInput()
  }

  this.init = function () {
    V.init(this, M.baseList())
    updateSpans()
  }
}
