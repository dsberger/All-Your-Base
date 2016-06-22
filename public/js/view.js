var View = function () {
  var bases, C

  function element (base, io) {
    return document.getElementById(base + '-' + io)
  }

  function swapVisibility (turnOff, turnOn) {
    turnOff.style.display = 'none'
    turnOn.style.display = 'inline'
  }

  function attachClickListener (base, inElement, outElement) {
    outElement.onclick = function () {
      closeAllInputs()
      C.setActiveInput(inElement)
      inElement.classList.add('active')
      swapVisibility(outElement, inElement)
      inElement.focus()
    }
  }

  function attachEnterListener (base, inElement, outElement) {
    inElement.onkeydown = function (e) {
      if (e.keyCode === 13) {
        closeAllInputs()
      }
    }
  }

  function attachIncrementListener () {
    document.getElementById('increment').onclick = function () {
      closeAllInputs()
      C.incrementValue()
    }
  }

  function attachDecrementListener () {
    document.getElementById('decrement').onclick = function () {
      closeAllInputs()
      C.decrementValue()
    }
  }

  function closeAllInputs () {
    C.clearActiveInput()
    bases.forEach(function (base) {
      var inElement = element(base, 'input')
      var outElement = element(base, 'output')
      inElement.classList.remove('active')
      swapVisibility(inElement, outElement)
    })
  }

  this.updateFieldValues = function (hash) {
    for (var base in hash) {
      element(base, 'output').innerText = hash[base]
      var inElement = element(base, 'input')
      if (!inElement.classList.contains('active')) {
        inElement.value = hash[base]
      }
    }
  }

  this.getActiveInputElement = function () {
    var inputField
    bases.forEach(function (base) {
      var tempField = element(base, 'input')
      if (tempField.classList.contains('active')) {
        inputField = tempField
      }
    })
    return inputField
  }

  this.init = function (controller, modelBases) {
    C = controller
    bases = modelBases

    bases.forEach(function (base) {
      var outElement = element(base, 'output')
      var inElement = element(base, 'input')

      attachClickListener(base, inElement, outElement)
      attachEnterListener(base, inElement, outElement)
    })

    attachIncrementListener()
    attachDecrementListener()
  }
}
