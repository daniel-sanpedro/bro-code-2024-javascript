// MAP ()

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(squares);
// console.log(cubes);

// function square(element) {
//   return Math.pow(element, 2);
// }

// function cube(element) {
//   return Math.pow(element, 3);
// }

// const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// const studentsUpper = students.map(uppercase);
// const studentsLower = students.map(lowercase);

// console.log(studentsUpper);
// console.log(studentsLower);

// function uppercase(element) {
//   return element.toUpperCase();
// }

// function lowercase(element) {
//   return element.toLowerCase();
// }

const dates = ["2024-1-10", "2024-5-10", "2026-4-10", "2025-7-11"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
