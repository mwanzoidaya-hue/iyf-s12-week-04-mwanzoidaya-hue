# Week 4: JavaScript Fundamentals, Calculator and Grade Tracker

## Author
- **Name:** Eunice Mwanzo Idaya
- **GitHub:** [@Idayaidaya-hue](https://github.com/Idayaidaya-hue)
- **Date:** November 9, 2026

## Project Description
My first real programming week. I practised variables, operators, functions, control flow, arrays, objects and JSON (Tasks 7.1 to 8.4), then built two programs: a calculator that handles six operators and division by zero, and a student grade tracker that stores students as objects and reports averages, the top student and anyone struggling. I also solved five daily challenges.

## Technologies Used
- HTML5
- JavaScript (ES6+)
- Node.js (to run files in the terminal)
- Git and GitHub

## Features
- `main.js`: practice for every task from 7.1 to 8.4
- `calculator.js`: `add`, `subtract`, `multiply`, `divide` and `calculate(num1, operator, num2)` for `+ - * / % **`, with a message instead of a crash when dividing by zero
- `grade-tracker.js`: `addStudent`, `getStudent`, `getStudentAverage`, `getSubjectAverage`, `getTopStudent`, `getStrugglingStudents`, `getLetterGrade` and `generateReportCard`
- `daily-challenges/`: FizzBuzz, reverse a string, largest number, remove duplicates, palindrome checker

## How to Run
1. Clone this repository
2. Open `index.html` with Live Server, press F12 and open the Console
   OR
   Run any file in the terminal, for example `node calculator.js` or `node grade-tracker.js`

## Lessons Learned
- `===` checks the type as well as the value, so `5 === "5"` is `false`, while the loose version would have said `true`.
- A function must `return` its answer. When my first calculator only used `console.log` inside the functions, the test lines printed `undefined`. Now the logging sits outside the functions.
- `Math.round(value * 100) / 100` turns 91.666... into the 91.67 the task expects.
- `Object.entries()` with `for...of` lets me loop over an object's keys and values together, which made the report card easy to build.
- `map`, `filter` and `reduce` replaced most of my loops, and `[...students].sort()` sorts a copy instead of changing the original array.

## Challenges Faced
- Several tasks reuse names such as `add` and `multiply`. Loading all the scripts in one page caused name clashes, so I wrapped each task in `main.js` in its own block.
- `getTopStudent` returns a whole student object, so I print `.name` to see "Alice" in the console.
- Dividing or taking the modulus by zero must not crash, so both return an error message.

## Screenshots (optional)
Not included.
