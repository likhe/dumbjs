let sayHello = function() {
  console.log("bonjour");
}

let double = function(x) {
  return x * 2;
}

let increment = function(x) {
  console.log("increment called");
  x++;
  if(x > 10) {
    return "finished";
  } else {
    return increment(x);
  }
}

let whenDOMReady = function() {
    document.getElementById("answerMe").addEventListener("click", sayHello);
}

document.addEventListener('DOMContentLoaded', whenDOMReady);
