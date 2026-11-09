// Day 4: Remove duplicates, two approaches
const removeWithSet = (items) => [...new Set(items)];

function removeWithFilter(items) {
    return items.filter((item, index) => items.indexOf(item) === index);
}

console.log(removeWithSet([1, 2, 2, 3, 4, 4, 5]));     // [ 1, 2, 3, 4, 5 ]
console.log(removeWithFilter([1, 2, 2, 3, 4, 4, 5]));  // [ 1, 2, 3, 4, 5 ]
