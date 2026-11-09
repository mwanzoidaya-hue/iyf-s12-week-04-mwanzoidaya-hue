// Week 4: JavaScript Fundamentals
// Practice for Lessons 7 and 8 (Tasks 7.1 to 8.4).
// Each task sits in its own block so its names never clash with
// calculator.js or grade-tracker.js when index.html loads all three.

// ---------- Task 7.1: Setup and variables ----------
{
    console.log("=== Task 7.1: Variables ===");
    const firstName = "Eunice";
    const birthYear = 2001; // change to your own birth year
    const age = new Date().getFullYear() - birthYear;
    const isStudent = true;
    const favouriteColours = ["green", "black", "white"];
    const today = new Date();

    console.log(`My name is ${firstName}`);
    console.log(`I am ${age} years old`);
    console.log(`Am I a student? ${isStudent}`);
    console.log(`My favourite colours are ${favouriteColours.join(", ")}`);
    console.log(`Today's date is ${today.toDateString()}`);

    console.log(typeof firstName);   // string
    console.log(typeof age);         // number
    console.log(typeof isStudent);   // boolean

    let score = 100;
    score = 150; // let can be reassigned
    console.log(`Score after reassigning: ${score}`);

    const PI = 3.14159; // const cannot be reassigned, so PI = 3 would throw a TypeError
    console.log(`PI is ${PI}`);
}

// ---------- Task 7.2: Data types and operators ----------
{
    console.log("=== Task 7.2: Operators ===");
    const a = 10;
    const b = 3;
    console.log(`Addition: ${a + b}`);
    console.log(`Subtraction: ${a - b}`);
    console.log(`Multiplication: ${a * b}`);
    console.log(`Division: ${a / b}`);
    console.log(`Modulus: ${a % b}`);
    console.log(`Exponentiation: ${a ** b}`);

    let count = 0;
    count++;
    console.log(`After increment: ${count}`);
    count--;
    console.log(`After decrement: ${count}`);

    const firstName = "Eunice";
    const lastName = "Mwanzo";
    const fullName = firstName + " " + lastName;
    const greeting = `Hello, ${firstName}!`;
    const message = `${firstName} has ${firstName.length} letters.`;
    console.log(greeting);
    console.log(message);
    console.log(fullName.toUpperCase());
    console.log(fullName.toLowerCase());
    console.log(firstName.charAt(0));
    console.log(fullName.includes("Eunice"));

    console.log(5 > 3);       // true
    console.log(5 < 3);       // false
    console.log(5 === 5);     // true
    console.log(5 === "5");   // false, strict equality checks the type too
    console.log(5 !== 3);     // true
    console.log(true && true);
    console.log(true || false);
    console.log(!true);

    // Challenge: age in days, age in hours, year of turning 100
    const birthYear = 2001; // change to your own birth year
    const age = new Date().getFullYear() - birthYear;
    const ageInDays = age * 365;
    const ageInHours = ageInDays * 24;
    console.log(`Age in days (approximately): ${ageInDays}`);
    console.log(`Age in hours (approximately): ${ageInHours}`);
    console.log(`I turn 100 in the year ${birthYear + 100}`);
}

// ---------- Task 7.3: Functions ----------
{
    console.log("=== Task 7.3: Functions ===");

    // Declaration, expression and arrow styles
    function greet(name = "Guest", greeting = "Hello") {
        return `${greeting}, ${name}!`;
    }

    const add = function (a, b) {
        return a + b;
    };

    const multiply = (a, b) => a * b;

    const divide = (a, b) => {
        if (b === 0) {
            return "Cannot divide by zero";
        }
        return a / b;
    };

    function calculateArea(width, height) {
        return width * height;
    }

    const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

    const isEven = (number) => number % 2 === 0;

    function getInitials(fullName) {
        return fullName
            .split(" ")
            .map((part) => part.charAt(0).toUpperCase())
            .join("");
    }

    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    function calculateTip(bill, tipPercent = 15) {
        return (bill * tipPercent) / 100;
    }

    console.log(greet());                    // Hello, Guest!
    console.log(greet("Wambui"));            // Hello, Wambui!
    console.log(greet("Kipchoge", "Hi"));    // Hi, Kipchoge!
    console.log(add(4, 6));
    console.log(multiply(4, 6));
    console.log(divide(10, 0));
    console.log(calculateArea(8, 5));
    console.log(celsiusToFahrenheit(25));    // 77
    console.log(isEven(8));                  // true
    console.log(isEven(7));                  // false
    console.log(getInitials("Eunice Mwanzo Idaya")); // ENW
    console.log(reverseString("Nairobi"));   // iborian
    console.log(calculateTip(2000));         // 300
    console.log(calculateTip(2000, 10));     // 200
}

// ---------- Task 7.4: Control flow ----------
{
    console.log("=== Task 7.4: Control flow ===");

    function getGrade(score) {
        if (score >= 90) {
            return "A";
        } else if (score >= 80) {
            return "B";
        } else if (score >= 70) {
            return "C";
        } else if (score >= 60) {
            return "D";
        }
        return "F";
    }

    function getDayName(dayNumber) {
        switch (dayNumber) {
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
            default:
                return "Invalid day";
        }
    }

    console.log(getGrade(93), getGrade(81), getGrade(74), getGrade(65), getGrade(40));
    console.log(getDayName(1), getDayName(6), getDayName(9));

    // While loop
    let count = 0;
    while (count < 3) {
        console.log(`While loop count: ${count}`);
        count++;
    }

    // For...of loop
    const colours = ["red", "green", "blue"];
    for (const colour of colours) {
        console.log(colour);
    }

    // 1. Numbers 1 to 100
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }

    // 2. Even numbers 1 to 50
    for (let i = 2; i <= 50; i += 2) {
        console.log(i);
    }

    // 3. FizzBuzz
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }

    // 4. Triangle of stars
    for (let row = 1; row <= 5; row++) {
        console.log("*".repeat(row));
    }
}

// ---------- Task 8.1: Arrays ----------
{
    console.log("=== Task 8.1: Arrays ===");
    const fruits = ["apple", "banana", "orange"];
    console.log(fruits[0], fruits.length);
    fruits.push("grape");
    fruits.unshift("mango");
    console.log(fruits);
    fruits.pop();
    fruits.shift();
    console.log(fruits);

    const numbers = [1, 2, 3, 4, 5];
    numbers.forEach((num) => console.log(num * 2));
    console.log(numbers.map((num) => num * 2));
    console.log(numbers.filter((num) => num % 2 === 0));
    console.log(numbers.find((num) => num % 2 === 0));
    console.log(numbers.reduce((total, num) => total + num, 0));
    console.log(numbers.includes(3));

    // Build: four array tasks
    const mixedNumbers = [4, -2, 15, 7, -9, 3, 12];
    const doubled = mixedNumbers.map((num) => num * 2);
    const noNegatives = mixedNumbers.filter((num) => num >= 0);
    const firstOverTen = mixedNumbers.find((num) => num > 10);
    const product = mixedNumbers.reduce((total, num) => total * num, 1);
    console.log(doubled);
    console.log(noNegatives);
    console.log(firstOverTen);
    console.log(product);
}

// ---------- Task 8.2: Objects ----------
{
    console.log("=== Task 8.2: Objects ===");
    const person = {
        firstName: "Eunice",
        lastName: "Mwanzo",
        age: 25,
        isStudent: true,
        hobbies: ["coding", "writing", "reading"],
        address: {
            city: "Nairobi",
            country: "Kenya"
        }
    };

    console.log(person.firstName);
    console.log(person["lastName"]);
    console.log(person.address.city);
    person.age = 26;
    person.course = "Bible and Theology";
    delete person.isStudent;
    console.log(person);

    const mathTools = {
        add: function (a, b) {
            return a + b;
        },
        subtract(a, b) {
            return a - b;
        },
        multiply: (a, b) => a * b
    };
    console.log(mathTools.add(5, 3));
    console.log(mathTools.subtract(5, 3));
    console.log(mathTools.multiply(5, 3));

    const scores = {
        math: 95,
        english: 88,
        science: 92
    };
    console.log(Object.keys(scores));
    console.log(Object.values(scores));
    console.log(Object.entries(scores));
    for (const [subject, score] of Object.entries(scores)) {
        console.log(`${subject}: ${score}`);
    }
}

// ---------- Task 8.3: Array of objects ----------
{
    console.log("=== Task 8.3: Array of objects ===");
    const students = [
        { name: "Wambui", age: 22, grade: 85, major: "CS" },
        { name: "Kipchoge", age: 20, grade: 72, major: "Math" },
        { name: "Achieng", age: 23, grade: 90, major: "CS" },
        { name: "Mutua", age: 21, grade: 88, major: "Physics" },
        { name: "Njeri", age: 22, grade: 95, major: "CS" }
    ];

    const names = students.map((student) => student.name);
    const highAchievers = students.filter((student) => student.grade > 80);
    const achieng = students.find((student) => student.name === "Achieng");
    const avgGrade =
        students.reduce((total, student) => total + student.grade, 0) / students.length;
    const csMajors = students.filter((student) => student.major === "CS");
    const sortedByGrade = [...students].sort((first, second) => second.grade - first.grade);
    const hasTopStudent = students.some((student) => student.grade > 90);
    const allPassing = students.every((student) => student.grade >= 60);

    console.log(names);
    console.log(highAchievers);
    console.log(achieng);
    console.log(avgGrade);
    console.log(csMajors);
    console.log(sortedByGrade);
    console.log(hasTopStudent);
    console.log(allPassing);
}

// ---------- Task 8.4: JSON ----------
{
    console.log("=== Task 8.4: JSON ===");
    const postsJson =
        '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';

    const posts = JSON.parse(postsJson);
    const published = posts.filter((post) => post.published);
    const byLikes = [...published].sort((first, second) => second.likes - first.likes);
    const labels = byLikes.map((post) => `${post.title} (${post.likes} likes)`);
    const backToText = JSON.stringify(published);

    console.log(posts);
    console.log(published);
    console.log(byLikes);
    console.log(labels);
    console.log(backToText);
    console.log(typeof backToText); // string

    // Invalid JSON throws a SyntaxError, so wrap outside text in try/catch
    try {
        JSON.parse("{name: 'broken'}");
    } catch (error) {
        console.log(`Caught: ${error.name}`);
    }
}
