// Random number generator

// let randomNum = Math.floor(Math.random() * 6) + 1;

// console.log(randomNum);

// const min = 50;
// const max = 100;

//                                         (max - min) to force operator precedence
// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);

// const myButton = document.getElementById("myButton");
// const myLabel = document.getElementById("myLabel");
// const min = 1;
// const max = 6;
// let randomNum;

// myButton.onclick = function () {
//   randomNum = Math.floor(Math.random() * max) + min;
//   myLabel.textContent = randomNum;
// };

const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;


myButton.onclick = function () {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
};
