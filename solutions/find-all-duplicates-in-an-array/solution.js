// Problem: Find All Duplicates in an Array
// LeetCode: https://leetcode.com/problems/find-all-duplicates-in-an-array/
// Language: javascript
// Runtime: 96 ms
// Memory: 49.3 MB
// Submitted: 2023-07-08

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (a) {
    let ob = {}
    let an = []
    let xor = 0
    for (let e of a) {
        let j = Math.abs(e) - 1

        if (a[j] > 0) {
            a[j] = -a[j]
        } else {
            an.push(Math.abs(e))
        }
    }

    return an;
};
