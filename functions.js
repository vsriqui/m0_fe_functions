// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 

function greeting(){
    return "Bonjour mon ami! Cava?";
}
var bonCa = greeting();
var bonCax2 = greeting() + (' ') +greeting();
console.log(bonCa);
console.log(bonCax2);


// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `Bonjour, mon ami ${name}!`;
}
console.log(customGreeting("January"));

var greetVictor = (customGreeting("Victor"));
var greetCornelius = (customGreeting("Cornelius"));

console.log(greetVictor);
console.log(greetCornelius);

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetAPerson(name1,name2,name3) {
    return `Hello, ${name1}, I heard your middle name is ${name2}, and surname is ${name3}!`;
  }
console.log(greetAPerson("Victor","Aharun","Sriqui"));

var victorGreet = (greetAPerson("Victor","Aharun","Sriqui"));
var hawkGreet = (greetAPerson("Tony","Frank","Hawk"));

console.log(victorGreet);
console.log(hawkGreet);

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(num1, num2) {
    var sum = num1 ** num2;
    return sum;
  }
  console.log(square(10,2));
  console.log(`The square of 5 to the power of 2 is ${square(5, 2)}.`);

var fivePowerOfSix = (`The square of 5 to the power of 6 is ${square(5, 6)}.`);
var threePowerOfThree = (`The square of 3 to the power of 3 is ${square(3, 3)}.`);

console.log(fivePowerOfSix);
console.log(threePowerOfThree);

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(status, foodName) {
    if (status===0) {
      return foodCheck = `${foodName} Out of stock!`;
    } else if (status >= 4) {
      return foodCheck = `${foodName} is stocked`;
    } else {
      return foodCheck =`${foodName} running low`;
    }
    }

var statusCoffee = checkStock(4, "Coffee");
// => "Coffee is stocked"

var statusTortillas = checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

var statusCheese = checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

var statusSalsa = checkStock(1, "Salsa");
// => "Salsa - running LOW"

console.log(statusCoffee, statusTortillas, statusCheese, statusSalsa);