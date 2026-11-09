// Day 1: FizzBuzz
function fizzBuzz(limit) {
    const results = [];
    for (let i = 1; i <= limit; i++) {
        if (i % 15 === 0) {
            results.push("FizzBuzz");
        } else if (i % 3 === 0) {
            results.push("Fizz");
        } else if (i % 5 === 0) {
            results.push("Buzz");
        } else {
            results.push(i);
        }
    }
    return results;
}

fizzBuzz(100).forEach((item) => console.log(item));
