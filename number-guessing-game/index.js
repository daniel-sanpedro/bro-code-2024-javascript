// NUMBER GUESSING GAME

// if minNum is 1 +minNum can be removed from const answer string
const minNum = 1;
const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess < minNum || guess > maxNum) {
    windows.alert("Please enter a valid number");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("Too low");
    } else if (guess > answer) {
      window.alert("Too high");
    } else {
      window.alert(
        `You guessed the correct answer ${answer} in ${attempts} attempts`
        );
        running = false;
    }

  }
}
