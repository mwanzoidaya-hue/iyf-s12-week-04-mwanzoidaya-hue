// Mini-Project: Calculator
// Run in the browser console (index.html) or with: node calculator.js

// Declaration style
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Arrow style
const multiply = (a, b) => a * b;

function divide(a, b) {
    if (b === 0) {
        return "Error: cannot divide by zero";
    }
    return a / b;
}

const modulus = (a, b) => {
    if (b === 0) {
        return "Error: cannot divide by zero";
    }
    return a % b;
};

const power = (a, b) => a ** b;

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return modulus(num1, num2);
        case "**":
            return power(num1, num2);
        default:
            return "Invalid operator";
    }
}

// Tests (console.log stays outside the functions)
console.log("--- Calculator ---");
console.log(calculate(10, "+", 5));   // 15
console.log(calculate(10, "-", 5));   // 5
console.log(calculate(10, "*", 5));   // 50
console.log(calculate(10, "/", 5));   // 2
console.log(calculate(10, "/", 0));   // Error message
console.log(calculate(10, "%", 3));   // 1
console.log(calculate(2, "**", 10));  // 1024
console.log(calculate(10, "%", 0));   // Error message
console.log(calculate(10, "&", 5));   // Invalid operator
