// string object

const myString = "Hello, JavaScript!";
console.log(myString.length); // String length
console.log(myString.toUpperCase()); // Convert to uppercase
console.log(myString.indexOf("JavaScript")); // Find the index of a substring

//RegExp object

const regex = /JavaScript/i; // Case-insensitive regex
const text = "JavaScript is a scripting language.";
console.log(regex.test(text)); // Test if the regex matchesdat
console.log(text.match(regex)); // Extract matched text

// main object

const number = 42.67;
console.log(Math.floor(number)); // Round down
console.log(Math.ceil(number)); // Round up
console.log(Math.round(number)); // Round to the nearest integer
console.log(Math.random()); // Generate a random number between 0 and 1

// date object

const currentDate = new Date();
console.log(currentDate); // Current date and time
console.log(currentDate.toDateString()); // Formatted date string
console.log(currentDate.toLocaleTimeString()); // Formatted time string

// Demonstrating the Navigator Object:

console.log(`User Agent: ${navigator.userAgent}`);
console.log(`Platform: ${navigator.platform}`);
console.log(`Language: ${navigator.language}`);
console.log(`Cookie Enabled: ${navigator.cookieEnabled}`);
