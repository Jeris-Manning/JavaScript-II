// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function bestColor() {
  
  function sayFavoriteColor(faveColor) {
    console.log(`My favorite color is ${faveColor}`);
  }
  return sayFavoriteColor;
}

//Classic people on the street and their favorite colors test

// let donsColor = bestColor();
// let petesColor = bestColor();
// let horaceColor = bestColor();

// petesColor("Like SUPER bright pink");
// donsColor("origin");
// horaceColor("Darkness");

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.

const counter = () => {
  let clickCount = 0;
  let clicker = () => {
    clickCount++;
    console.log(clickCount);
    return clickCount;
  };
  return clicker;
};

// Classic Mouse and Moose counting test

// const miceCanCount = counter();
// const mooseCanCount = counter();
// mooseCanCount();
// mooseCanCount();
// mooseCanCount();
// mooseCanCount();
// mooseCanCount();
// miceCanCount();
// mooseCanCount();
// miceCanCount();
// miceCanCount();

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.

const counterFactory = () => {
  let count = 0;
  const counter = {
    increment: function() {
      count++;
      console.log(count);
      return count;
    },
    decrement: function() {
      count--;
      console.log(count);
      return count;
    }
  };
  return counter;
};

// Test robot looking for closure. Going to let him test things out. 

// const clickerBot = counterFactory();

// clickerBot.increment();
// clickerBot.increment();
// clickerBot.increment();
// clickerBot.increment();
// clickerBot.increment();
// clickerBot.decrement();
// clickerBot.decrement();
// clickerBot.increment();
// clickerBot.decrement();
