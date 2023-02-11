// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  return "Hello, what is your name?";
}
console.log(askForName());

// console.log("Hello, what is your name?") Prints what is your name in isolation.
// Changing that to return allows for what the function returns when called.
// Semicolons should follow lines of code, and lines of code should be on their own line.
// askForName is what calls the function, console.log could be used to log it to console when node cleanUp.js is ran.

// EX 2:

function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
}
  
addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

// Lines of code need semicolons
// addThreeNums is what calls the function, by having function return a value itself, only invocation has to occur.
  
  // EX 3:
  function makeFreshPesto() {
    console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
    console.log("Pulse basil and pine nuts");
    console.log("Add garlic and cheeses");
    console.log("Slowly pour in oil");
    console.log("Season");    
  }
  
  makeFreshPesto();
// Closing curly bracket was messy by including it on the lower line of code.
// func is not a function, function is a function.

  //  EX 4:
  function average(num1, num2) {
  var sum = num1 + num2;
      var avg = sum / 2;
  
  return avg;
    }

    console.log(average(1,2));

// Opening curly bracket is in wrong location, it begings with the function line of code.
// Missing semicolon at return avg, return avg is its own line of code.
// Added console.log(average(1,2)); to test the function with values, call the function with average, and log it to terminal with console.log.