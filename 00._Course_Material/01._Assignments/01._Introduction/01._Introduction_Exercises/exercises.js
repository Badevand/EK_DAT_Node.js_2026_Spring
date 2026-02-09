// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

const firstName = "Anders";
const lastName = "Latif";
// console.log("My first name is " + firstName + " and my last name is " + lastName + ".");

// const selfIntroduction = "My first name is " + firstName + " and my last name is " + lastName;

// backticks, String template literal, String interpolation
const intro = `My first name is ${firstName} and my last name is ${lastName}.`;
// console.log(intro);

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2025";
const increment = 1;

// Add the year plus the increment
// The result should be 2026
// You cannot touch the first or the second line

const currentYear = parseInt(year) + increment;
// console.log(currentYear);

// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

// const result = parseFloat(numberOne) + parseFloat(numberTwo);
// console.log(result);

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

//const results = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
//console.log(results.toFixed(2));

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals
//const result = (one + two + three) / 3;
//console.log(result.toFixed(5));

// --------------------------------------
// Exercise 6 - Get the character by index

//const letters = "abc";
// Get me the character "c"

//console.log(letters[2]);

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

//console.log(fact.replace("j", "J"));

// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const greetings = { message: "Hello, earthling! I bring peace." };

// Log the message 

// --------------------------------------

//console.log(greetings.message);

// --------------------------------------
// Exercise 2 - Defining an object.

// Create an object that has your name and age. 

const sid = { name: "Sid", age: 25};
//console.log(sid);


// --------------------------------------

// --------------------------------------
// Exercise 3 - Add a key-value pair

const stackOverflow = {};
stackOverflow.isAllowed = true;
//console.log(stackOverflow);
// make a rule called isAllowed and let the value be true



// --------------------------------------



// --------------------------------------
// Exercise 4 - Remove a property

const thisSong = { description: "The best song in the world." };

// remove the property "description" and add a property called "about" that should say "Just a tribute." 


delete thisSong.description;
thisSong.about = "Just a tribute.";
//console.log(thisSong);

// --------------------------------------


// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a", "b", "c"];
// show b in the console 

//console.log(letters[1]);

// --------------------------------------

// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

friends[0] = { name: "Bib" };
friends[1] = { name: "Beb" };
friends[2] = { name: "Bob" };
//console.log(friends);

// --------------------------------------

// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];
//console.log(significantMathNumbers.indexOf(1729));


// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed.
// There is a method for this (finding index based of value). 

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and
// pizza between the elements cucumber and rocket

diet.splice(2, 0, "hamburger", "soda", "pizza");
//console.log(diet);

// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the
// array because you are too full already. 

diet.pop();
//console.log(diet);
// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise.
// Copy it to a new array called dinnerTray so you can give it to a friend.  

const dinnerTray = diet.slice();
console.log(dinnerTray);

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a", "b", "c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b
for (let i = 1; i < lettersExpanded.length; i +=2) {
    console.log(lettersExpanded[i]);
}


// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

for (let i = 0; i < numbers.length; i++) {
if (numbers[i] > 6 || numbers[i] < 0) {
    console.log(numbers[i]);
} else {
    discardedNumbers.push(numbers[i]);
}
}

// --------------------------------------