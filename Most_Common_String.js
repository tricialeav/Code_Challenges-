// Given an array of strings, find the most commonly occuring item.

const mostFrequent = (arr) => {
    let obj = {};
    let current;
    let max = 0;
    let matchingKey = "";
    arr.forEach((char) => {
        current = char.toLowerCase();
        if (obj[current] === undefined) {
            obj[current] = 0;
        }
        obj[current]++;
    });
    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            matchingKey = key;
        }
    };
    return matchingKey;
}