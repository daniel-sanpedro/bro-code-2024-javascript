// how to accept user input

// 1. easy way = windows prompt
// 2. professional way = HTML textbox

// easy way
// declare all variables to be used

// let username;

// username = window.prompt("whats your username?")

// console.log(username)

// professional way

document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("myText").value;
  // console.log(username)
  document.getElementById("myH1").textContent = `hello ${username}`;
};
