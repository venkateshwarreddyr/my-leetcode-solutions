// Problem: Odd String Difference
// LeetCode: https://leetcode.com/problems/odd-string-difference/
// Language: javascript
// Runtime: 65 ms
// Memory: 45.2 MB
// Submitted: 2023-05-24

/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {

    let obj = {}

    for (let word of words) {
        let n = word.length;
        let arr = []
        for (let i = 0; i < n - 1; i++) {
            arr.push(word[i + 1].charCodeAt() - word[i].charCodeAt())
        }

        obj[arr.toString()] = obj[arr.toString()] || []
        obj[arr.toString()].push(word)
    }

    for (let key in obj) {
        if (obj[key].length === 1) {
            return obj[key][0]
        }
    }
};
