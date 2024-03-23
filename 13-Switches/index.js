// SWITCHES

// switch = can be an efficient replacement to many else if statements

// let day = 1;

// if (day == 1) {
//   console.log("its monday");
// } else if (day == 2) {
//   console.log("its tuesday");
// } else if (day == 3) {
//   console.log("its wednesday");
// } else if (day == 4) {
//   console.log("its thursday");
// } else if (day == 5) {
//   console.log("its friday");
// } else if (day == 6) {
//   console.log("its saturday");
// } else if (day == 7) {
//   console.log("its sunday");
// } else {
//   console.log("invalid day");
// }

// let day = 1;

// switch (day) {
//   case 1:
//     console.log("its monday");
//     // breaks are required to exit the switch after it finds a match
//     break;
//   case 2:
//     console.log("its tuesday");
//     break;
//   case 3:
//     console.log("its wednesday");
//     break;
//   case 4:
//     console.log("its thursday");
//     break;
//   case 5:
//     console.log("its friday");
//     break;
//   case 6:
//     console.log("its saturday");
//     break;
//   case 7:
//     console.log("its sunday");
//     break;
//     // default is incase there is no matches to exit he switch
//   default:
//   console.log("invalid day");

// }

let testScore = 91;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "A";
    break;
  case testScore >= 80:
    letterGrade = "B";
    break;
  case testScore >= 70:
    letterGrade = "C";
    break;
  case testScore >= 60:
    letterGrade = "D";
    break;
  case testScore <= 59:
    letterGrade = "F";
    break;
  default:
}

console.log(letterGrade);
