// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"

"Hello World".toLowerCase();
//////////////////////////////////////////////// EXAMPLE

"Hello World".includes("Hello");
// The includes() method can have a return value of 'true' or 'false', a Boolean.
// It calls on a specified string, in this case "Hello World".
// It returns true when the string 'includes' the characters parenthesized and qouted, in the same order, casing, and spacing as the string.
// It returns false when the string doesn't include those characters as specified above.
// Examples: "hello", "H ello", and "Hello   World" are false. "World" is true.   

"Hello World".endsWith("Hello"); 
"Hello World".endsWith("rld");
// The includes() method can have a return value of 'true' or 'false', a Boolean.
// It calls on a specified string, in this case "Hello World".
// It returns true when the string 'ends' with the characters parenthesized and qouted, starting from the last character.
// It requires the same order, casing, and spacing as the string.
// Examples: "W orld", "Wirld", "Hello   World" are false. But, "o World" is true.




// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));


// The trim() method is called on the car1 variable, removes spaced out area or whitespace from both ends of the string, without modifying the string itself.
// So, in essence, "    Mercedes-Benz    ", is returned when called with trim() as "Mercedes-Benz"
var car1 = "    Mercedes-Benz    ";
console.log(car1.trim());



// The replace() method is called on the car2 variable, replaces a pattern of characters with a replacement in the string.
// So, in essence, it takes the specified o, searches car2 for o, and replaces it with Hippo. Returning a string of HHipponda.
var car2 = "Honda"
console.log(car2.replace("o", "Hippo"))




// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.


// The join method is called on the animals array, and returns the array as a new string.
// Default is separation by the commas specified in the array, but can specify own separator string to be included in newly generated string.
// In this case the returned string value is Dog_Frog_Balrog.
var animals = ["Dog", "Frog", "Balrog"]
console.log(animals.join('_'));


// The findIndex method is called on the numbers array utilizing a declared testing function.
// The first element in the array that satisfies the testing function returns its index position.
// In this case the returned value is 4 for the 5th element in the 4th index position.
var numbers = [26, 12, 24, 11, 52];
var aboveFifty =  (element) => element >= 50;
console.log(numbers.findIndex(aboveFifty));