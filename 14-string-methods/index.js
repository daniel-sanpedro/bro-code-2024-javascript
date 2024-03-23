// STRING METHODS

// let userName = "daniel";

// userName.charAt(0)

// console.log(userName.charAt(0))

// results as follows:
// d

// let userName = "daniel";

// console.log(userName.indexOf("o"));

// result as follows:
// -1

// n is 2 letters over 0, 1, 2
// let userName = "daniel";

// console.log(userName.indexOf("n"));

// result as follows:
// 2

// lastIndexOf searches this string and returns the index of the last occurrence of the specified substring
// let userName = "daniels";

// console.log(userName.lastIndexOf("s"));

// result as follows:
// 6

// let userName = "daniels";

// console.log(userName.length);

// results as follows:
// 7

// .trim method of String values removes whitespace from both ends of this string and returns a new string
// let userName = "      daniels";

// userName = userName.trim();

// console.log(userName);

// result as follows:
// daniels

// .toUpperCase method will force upper case
// let userName = "daniels";

// userName = userName.toUpperCase();

// console.log(userName);

// results as follows:
// DANIELS

// .toLowerCase method will force strings to be lowercase
// let userName = "DANIELS";

// userName = userName.toLowerCase();

// console.log(userName);

// results as follows:
// daniels

// .repeat will repeat the string (x) number of times
// let userName = "daniels";

// userName = userName.repeat(3);

// console.log(userName);

// .startsWith false example
// let userName = "daniels";

// let result = userName.startsWith(" ");

// console.log(result);

// results as follows:
// false

// .starts with true example
// let userName = "daniels";

// let result = userName.startsWith("d");

// console.log(result);

// results as follows:
// true

// .startsWith using if statements
// let userName = " daniels";

// let result = userName.startsWith(" ");

// if (result){
//     console.log("your username cant begin with ''");

// }else {
//     console.log(userName)
// }

// results as follows:
// your username cant begin with ''

//
// let userName = "daniels";

// let result = userName.startsWith(" ");

// if (result){
//     console.log("your username cant begin with ''");

// }else {
//     console.log(userName)
// }

// results as follows:
// daniels

//
// let phoneNumber = "123-456-7890"

// phoneNumber = phoneNumber.replaceAll("-","/");

// console.log(phoneNumber);

// results as follows:
// 123/456/7890

// .padStart fills the result with 0 until its length is equal to the number
// let phoneNumber = "123-456-7890"

//                                (length, "pad with")
// phoneNumber = phoneNumber.padStart(15,"0");

// console.log(phoneNumber);

// results as follows:
// 000123-456-7890

// let phoneNumber = "123-456-7890"

//                                (length, "pad with")
// phoneNumber = phoneNumber.padEnd(15,"0");

// console.log(phoneNumber);

// results as follows:
// 123-456-7890000
