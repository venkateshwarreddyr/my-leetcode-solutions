// Problem: Circular Permutation in Binary Representation
// LeetCode: https://leetcode.com/problems/circular-permutation-in-binary-representation/
// Language: javascript
// Runtime: 149 ms
// Memory: 59.8 MB
// Submitted: 2023-07-26

cl = console.log
/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function (n, start) {
    var getGreyCode = function (n) {
        let a = [];
        for (let i = 0; i < 2 ** n; i++) {
            a.push(i ^ (i / 2));
        }
        return a;
    };

    let a = getGreyCode(n)
    let i = a.indexOf(start)
    return [start, ...a.slice(i + 1), ...a.slice(0, i)]
};
