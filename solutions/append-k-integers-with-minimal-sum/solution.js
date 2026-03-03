// Problem: Append K Integers With Minimal Sum
// LeetCode: https://leetcode.com/problems/append-k-integers-with-minimal-sum/
// Language: javascript
// Runtime: 102 ms
// Memory: 64.4 MB
// Submitted: 2023-08-16

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimalKSum = function (a, k) {
    let sum = k * (k + 1) / 2
    let set = new Set(a)
    let more = 0

    for (let e of set) {
        if (e <= k) {
            sum -= e
            more++
        }
    }

    while (more) {
        if (!set.has(++k)) {
            sum += k
            more--
        }
    }
    return sum
};
