// STATIC KEYWORDS

// class MathUtil {
//   static PI = 3.14159;

//   static getDiameter(radius) {
//     return radius * 2;
//   }
//   static getCircumference(radius) {
//     return 2 * this.PI * radius;
//   }
//   static getArea(radius) {
//     return this.PI * radius ** 2;
//     // return Math.PI * radius * radius;
//   }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));

class User {
  static userCount = 0;
  constructor(username) {
    this.username = username;
    User.userCount++;
  }
  static getUserCount() {
    console.log(`there are this many users ${User.userCount}`);
  }
  sayHello() {
    console.log(`Hello ${this.username}`);
  }
}

const user1 = new User("dpsan");
const user2 = new User("test");

console.log(user1.username);
console.log(user2.username);
console.log(User.userCount);

user1.sayHello();
user2.sayHello();

User.getUserCount();
