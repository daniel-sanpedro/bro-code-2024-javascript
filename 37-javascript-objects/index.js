// JAVASCRIPT OBJECTS

const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  isEmployed: true,
  sayHello: function(){console.log("Hi, I am Spongebob!")};
  sayBye: function(){console.log("Goodbye")};
};

const person2 = {
  firstName: "Patrick",
  lastName: "Starfish",
  age: 42,
  isEmployed: false,
  sayHello: () => console.log("Hi, I am Patrick!");
  sayBye: function(){console.log("Goodbye")};
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
console.log(person1.sayHello);
console.log(person1.sayBye);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
console.log(person2.sayHello);
console.log(person2.sayBye);
