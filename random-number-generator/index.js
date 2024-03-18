// Random number generator

// let randomNum = Math.floor(Math.random() * 6) + 1;

// console.log(randomNum);

// const min = 50;
// const max = 100;

//                                         (max - min) to force operator precedence
// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function () {
  randomNum = Math.floor(Math.random() * max) + min;
  myLabel.textContent = randomNum;
};
