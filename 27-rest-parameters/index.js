// REST PARAMETER

// function openFridge(...foods) {
//   console.log(...foods);
// }
// function getFood(...foods) {
//   return foods;
// }

// const food1 = "pizza";

// const food2 = "burger";

// const food3 = "fries";

// const food4 = "sushi";

// openFridge(food1, food2, food3, food4);

// const foods = getFood(food1, food2, food3, food4);

// console.log(foods);

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }

// const total = sum(1, 2, 3, 4, 5);

// console.log(`your total is ${total}`);

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }

// function getAverage(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result / numbers.length;
// }

// const total = getAverage(75, 100, 85, 90, 50);

// console.log(`your total is ${total}`);

function combineStrings(...string) {
  return string.join(" ");
}

const fullName = combineStrings("mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);
