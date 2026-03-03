// Problem: Reconstruct Original Digits from English
// LeetCode: https://leetcode.com/problems/reconstruct-original-digits-from-english/
// Language: javascript
// Runtime: 411 ms
// Memory: 60 MB
// Submitted: 2023-07-26

cl = console.log
/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
    let ob = {}
    let a = [
        ["z", "zero", 0],
        ["x", "six", 6],
        ["w", "two", 2],
        ["g", "eight", 8],
        ["u", "four", 4],
        ["r", "three", 3],
        ["f", "five", 5],
        ["v", "seven", 7],
        ["i", "nine", 9],
        ["o", "one", 1],
    ]

    for (let c of s) {
        ob[c] = ob[c] || 0
        ob[c]++
    }


    let an = []

    for (let [c, e, num] of a) {
        while (ob[c]) {
            cl(c, e, num)
            an.push(num)
            for (let ch of e) {
                ob[ch]--
            }
        }
    }
    cl(ob)
    return an.sort().join("")
};
