// Problem: Groups of Special-Equivalent Strings
// LeetCode: https://leetcode.com/problems/groups-of-special-equivalent-strings/
// Language: javascript
// Runtime: 84 ms
// Memory: 47.5 MB
// Submitted: 2023-07-04

cl = console.log
/**
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function (words) {
    let ob = {}
    for (let word of words) {

        let odd = ""
        let even = ""

        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) even += word[i]
            if (i % 2 === 1) odd += word[i]
        }
        let x = even.split("").sort().join("") + odd.split("").sort().join("")
        ob[x] = ob[x] || []
        ob[x].push(word)
    }

    return Object.keys(ob).length
};

/*

xyzz
yxzz
*/
