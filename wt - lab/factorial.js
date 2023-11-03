// factorial number

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const num = 5; // Replace with the number for which you want to calculate the factorial
const result = factorial(num);
console.log(`Factorial of ${num} is ${result}`);

// fibonacci number

function fibonacci(n) {
    if (n <= 1) {
        return [0];
    } else {
        const series = [0, 1];
        for (let i = 2; i < n; i++) {
            series[i] = series[i - 1] + series[i - 2];
        }
        return series;
    }
}

const count = 10; // Replace with the number of Fibonacci numbers you want
const fibonacciSeries = fibonacci(count);
console.log(`Fibonacci Series: ${fibonacciSeries.join(', ')}`);

// Simple Number Validation:

function isNumber(input) {
    return !isNaN(input) && isFinite(input);
}

const userInput = "42"; // Replace with the user's input
if (isNumber(userInput)) {
    console.log(`${userInput} is a valid number.`);
} else {
    console.log(`${userInput} is not a valid number.`);
}

// Email Address Validation:

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}


const userEmail = "example@email.com"; // Replace with the user's email input
if (isValidEmail(userEmail)) {
    console.log(`${userEmail} is a valid email address.`);
} else {
    console.log(`${userEmail} is not a valid email address.`);
}
