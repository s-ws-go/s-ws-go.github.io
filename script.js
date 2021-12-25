/* function sayHello (name, age) {
  return `Hello ${name} you are ${age} years old!` ;
}

const greetsws = sayHello("sws", 33)


console.log(greetsws);


const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  squrrel: function(a, b) {
    return a ** b;
  }
}

const plus = calculator.plus(5, 5)
const minus = calculator.minus(5, 5)
const aa = calculator.squrrel(5, 5)

console.log(plus)
console.log(minus)
console.log(aa) */

/*
const title = document.querySelector("#title");
title.innerHTML = "HI! Im SWS";
title.style.color = "blue";
document.tytle = "I own you now";*/

const title = document.querySelector("#title");

const BASE_COLOR = "black";
const OTHER_COLOR = "#6ab04c"; 

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}
function init () {
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}

init();


