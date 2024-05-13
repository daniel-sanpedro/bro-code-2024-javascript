// VARIABLE SCOPE

// let x = 1;

// let x = 2;

// console.log(x);

// results as follows:
// Uncaught SyntaxError: identifier 'x' has already been declared

function function1() {
  let x = 1;
  console.log(x);
}

function function2() {
  let x = 2;
  console.log(x);
}

// the reason this is legal is because functions cannot see outside the scope of their own function
// also known as a local scope
