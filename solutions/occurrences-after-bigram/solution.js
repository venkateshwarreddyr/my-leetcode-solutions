// Problem: Occurrences After Bigram
// LeetCode: https://leetcode.com/problems/occurrences-after-bigram/
// Language: javascript
// Runtime: 52 ms
// Memory: 42.3 MB
// Submitted: 2023-05-25

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
    let an = [];
    words = text.split(" ")
    let n = words.length
    for (let i = 1; i < n - 1; i++) {
        if (words[i - 1] === first && words[i] === second) {
            an.push(words[i + 1])
        }
    }

    return an;
};
