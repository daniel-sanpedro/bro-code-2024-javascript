// CALLBACKS

// hello();
// goodbye();
// function hello() {
//   setTimeout(function () {
//     console.log("hello");
//   }, 3000);
// }

// function goodbye() {
//   console.log("goodbye");
// }

// hello(goodbye);

// function hello(callback) {
//   console.log("hello");
//   callback();
// }

// function wait() {
//   console.log("wait");
// }

// function leave() {
//   console.log("leave");
// }

// function goodbye() {
//   console.log("goodbye");
// }

sum(displayPage, 1, 2);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}
function displayConsole(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}
