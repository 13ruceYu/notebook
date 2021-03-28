var initCompute = (function () {
  function plus (a, b) {
    return a + b;
  }

  function minus (a, b) {
    return a - b;
  }

  function mul (a, b) {
    return a * b;
  }

  function div (a, b) {
    return a / b;
  }

  return {
    plus,
    minus,
    mul,
    div
  }
})();

var initTools = (function () {
  function digitalize (str) {
    return Number(str.replace(/\s+/g, '')) || 0;
  }

  function getTarget (ev) {
    var e = ev || window.event;
    return tar = e.target || e.srcElement
  }

  return {
    digitalize,
    getTarget
  }
})();