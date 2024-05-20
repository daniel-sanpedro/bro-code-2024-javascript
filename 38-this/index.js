// THIS

const person1 = {
  name: "Spongebob",
  favFood: "hamburger",
  sayHello: function () {
    console.log(`Hi! I am ${this.name}`);
  },
  eat: function () {
    console.log(`${this.name} is eating a ${this.favFood}`);
  },
};

const person2 = {
  name: "Patrick",
  favFood: "Pizza",
  sayHello: function () {
    console.log(`Hi! I am ${this.name}`);
  },
  eat: function () {
    console.log(`${this.name} is eating a ${this.favFood}`);
  },
};

person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();
