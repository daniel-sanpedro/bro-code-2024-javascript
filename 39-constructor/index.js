// CONSTRUCTORS

// const car1 = {
//     make: "Ford",
//     model: "Mustang",
//     year: 2024,
//     color: "Red",
//     drive: function () {console.log(`you drive ${this.model}`)}
// }

// const car2 = {
//     make: "Chevrolet",
//     model: "Camero",
//     year: 2025,
//     color: "Blue",
//     drive: function () {console.log(`you drive ${this.model}`)}
// }

// const car3 = {
//     make: "Dodge",
//     model: "Charger",
//     year: 2026,
//     color: "Black",
//     drive: function () {console.log(`you drive ${this.model}`)}
// }

// function Car(make, model, year, color) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
// }

// while this does work the readability is not optimal
// function Car(a, b, c, d) {
//   this.make = a;
//   this.model = b;
//   this.year = c;
//   this.color = d;
// }

// const car1 = new Car("Ford", "Mustang", 2024, "Red");
// const car2 = new Car("Chevrolet", "Camero", 2025, "Blue");
// const car3 = new Car("Dodge", "Charger", 2026, "Black");

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);

// console.log(car3.make);
// console.log(car3.model);
// console.log(car3.year);
// console.log(car3.color);

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.drive = function () {
    console.log(`you drive ${this.model}`);
  };
}

const car1 = new Car("Ford", "Mustang", 2024, "Red");
const car2 = new Car("Chevrolet", "Camero", 2025, "Blue");
const car3 = new Car("Dodge", "Charger", 2026, "Black");

car1.drive();
car2.drive();
car3.drive();
