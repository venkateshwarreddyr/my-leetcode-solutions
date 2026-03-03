// Problem: Vowels of All Substrings
// LeetCode: https://leetcode.com/problems/vowels-of-all-substrings/
// Language: javascript
// Runtime: 155 ms
// Memory: 62.9 MB
// Submitted: 2023-07-04

cl = console.log
/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function (word) {
    let n = word.length
    let vc = 0
    let v = {
        a: 1,
        e: 1,
        i: 1,
        o: 1,
        u: 1,
    }
    let a = []
    for (let c of word) {
        a.push(!v[c] ? 0 : 1)
    }
    a = a.join("")
    let total = 0;
    let count = 0;
    for (let i = 0; i < n; i++) {
        if ((a[i]) === "1") {
            count += i + 1;
        }
        total += count;

    }

    return total;
};

