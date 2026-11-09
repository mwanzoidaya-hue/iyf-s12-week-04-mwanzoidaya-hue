// Day 2: Reverse a string, three approaches
function reverseWithLoop(text) {
    let reversed = "";
    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    return reversed;
}

const reverseWithMethods = (text) => text.split("").reverse().join("");

const reverseWithReduce = (text) => text.split("").reduce((reversed, char) => char + reversed, "");

console.log(reverseWithLoop("hello"));      // olleh
console.log(reverseWithMethods("hello"));   // olleh
console.log(reverseWithReduce("hello"));    // olleh
