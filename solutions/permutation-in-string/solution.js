// Problem: Permutation in String
// LeetCode: https://leetcode.com/problems/permutation-in-string/
// Language: javascript
// Runtime: 170 ms
// Memory: 48.7 MB
// Submitted: 2023-07-04

cl = console.log
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let arr1 = new Array(26).fill(0);
    for (let e of s1) {
        arr1[e.charCodeAt() - 97]++;
    }

    let arr2 = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        arr2[s2.charCodeAt(i) - 97]++
    }


    for (let i = 0, j = s1.length; j <= s2.length; i++, j++) {
        if (arr1.toString() === arr2.toString()) return true
        arr2[s2.charCodeAt(j) - 97]++
        arr2[s2.charCodeAt(i) - 97]--
    }

    return false

};
