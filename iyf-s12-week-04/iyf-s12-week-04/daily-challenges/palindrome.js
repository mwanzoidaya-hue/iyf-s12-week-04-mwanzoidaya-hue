// Day 5: Palindrome checker (ignores case, spaces and punctuation)
function isPalindrome(text) {
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("racecar"));                          // true
console.log(isPalindrome("hello"));                            // false
console.log(isPalindrome("A man a plan a canal Panama"));      // true
