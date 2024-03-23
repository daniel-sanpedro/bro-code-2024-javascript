// WHILE LOOPS

// let username = "";

// if (username === "") {
//   console.log("Please enter a name");
// } else {
//   console.log(`Hello  ${username}`);
// }

// results are as follows:
// please enter a name

//
// WHILE INFINITE LOOP
//

// while loop infinitely running

// let username = "";

// while (username === "") {
//   console.log("Please enter a name");
// }
// console.log(`Hello  ${username}`);

// results are as follows:
// please enter a name
// also will run until browser crashes

//
// WHILE LOOP
//

// because username is true code kicks you out of while loop so you dont fall into the infinite loop
// let username = "daniel";

// while (username === "") {
//   console.log("Please enter a name");
// }
// console.log(`Hello  ${username}`);

// results as follows:
// Hello daniel

// let username = "";

// while (username === "") {
//   username = window.prompt(`Please enter a name`);
// }
// console.log(`Hello  ${username}`);

// results as follows:
// prompt forces a username
// null can appear if canceled null = no value

// let username = "";

// by appending the condition you can prevent null from being a default value
// while (username === "" || username === null) {
//   username = window.prompt(`Please enter a name`);
// }
// console.log(`Hello  ${username}`);

// results as follows:
// must enter username

//
// DO WHILE
//

// let username = "";

// doing it this way forces the do function at least once while checking condition at the end
// do {
//   username = window.prompt(`Please enter a name`);
// } while (username === "" || username === null);

// console.log(`Hello  ${username}`);

// results as follows:
// must enter username

// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn) {
// username = window.prompt(`enter your username`);
// password = window.prompt(`Enter your password`);

// if(username === "myUsername" && password === "myPassword"){
//     loggedIn = true;
//     console.log(`Welcome ${username}`);
// }
// else{
//     console.log("Please try again");
// }
// }

// results as follows:
// welcome myUsername

let loggedIn = false;
let username;
let password;

do {
  username = window.prompt(`enter your username`);
  password = window.prompt(`Enter your password`);

  if (username === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log(`Welcome ${username}`);
  } else {
    console.log("Please try again");
  }
} while (!loggedIn);

// results as follows:
// welcome myUsername