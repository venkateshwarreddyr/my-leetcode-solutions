// Problem: Row With Maximum Ones
// LeetCode: https://leetcode.com/problems/row-with-maximum-ones/
// Language: javascript
// Runtime: 146 ms
// Memory: 49.8 MB
// Submitted: 2023-07-15

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
    let ind = -1;
    let maxSum = -1;
    for (let i = 0; i < mat.length; i++) {
        let sum = mat[i].join("").replaceAll("0", "").length
        if (sum > maxSum) {
            maxSum = sum;
            ind = i;
        }
    }

    return [ind, maxSum]
};
