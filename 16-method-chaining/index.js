// METHOD CHAINING

// Method Chaining = calling one method after another
//                    in one continuous line of code

// creating a prompt to ask for a username
let username = window.prompt("enter your username: ");

//  
// NO METHOD CHAINING
// 

// using trim method to remove spaces 
// username = username.trim();

// this will grab the first letter of the username and capitalize it
// .charAt(0) short for characters will target the first character or (0)
// let letter = username.charAt(0);

// .toUpperCase() will capitalize the targeted character
// letter = letter.toUpperCase();

// with the rest of the characters i will make them lowercase
// using slice to target everything after the first character (0) so everything after 1 will be lowercase
// let extraChars = username.slice(1);

// .toLowerCase() will lowercase the target character which is everything after the first character
// extraChars = extraChars.toLowerCase();

// storing them back into the username
// username = letter + extraChars;

// console.log(username);

// 
// METHOD CHAINING
// 

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;

// taking from the example above going from .trim() instead of ending ; link right into .charAt() then .toUpperCase()
// + .slice(1) everything after is targeted .toLowerCase() lowercase everything else
username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();

console.log(username)


































