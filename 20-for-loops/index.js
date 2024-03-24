// FOR LOOPS

// i = index and what to start at 0
// the next statement is the condition to continue the for loop i <= 2 (index is greater than equal to 2)
// i++ increment the variable by 1
// for (let i = 0; i <= 2; i++) {
//   console.log("hello");
// }

//results are as follows:
// 3x hello

// for (let i = 0; i <= 2; i++) {
//   console.log(i);
// }

// results are as follows:
// 0
// 1
// 2

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// results are as follows:
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// for (let i = 0; i <= 10; i+=2) {
//     console.log(i);
//   }

// results are as follows:
// 0
// 2
// 4
// 6
// 8
// 10

// for (let i = 0; i <= 10; i += 3) {
//   console.log(i);
// }

// results are as follows:
// 0
// 3
// 6
// 9

// for (let i = 3; i <= 10; i++) {
//   console.log(i);
// }

// results are as follows:
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// for (let i = 10; i > 0; i--) {
//     console.log(i);
//   }

//   console.log("happy new year")

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// happy new year

// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i == 13) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }


// break will break you out of the loop entirely
for (let i = 1; i <= 20; i++) {
    if (i == 13) {
      break;
    } else {
      console.log(i);
    }
  }