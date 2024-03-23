// HOW TO ACCEPT USER INPUT

//
// easy way
//

// declare all variables to be used

// let username;

// username = window.prompt("whats your username?")

// console.log(username)

//
// professional way
//

document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("myText").value;
  // console.log(username)
  document.getElementById("myH1").textContent = `hello ${username}`;
};
