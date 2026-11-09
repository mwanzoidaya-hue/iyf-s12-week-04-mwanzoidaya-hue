// Day 3: Find the largest number (no Math.max)
function findLargestWithLoop(numbers) {
    let largest = numbers[0];
    for (const number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }
    return largest;
}

const findLargestWithReduce = (numbers) =>
    numbers.reduce((largest, number) => (number > largest ? number : largest), numbers[0]);

console.log(findLargestWithLoop([4, 19, 7, 23, 11]));    // 23
console.log(findLargestWithReduce([4, 19, 7, 23, 11]));  // 23
