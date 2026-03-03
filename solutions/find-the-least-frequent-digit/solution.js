// Problem: Find The Least Frequent Digit
// LeetCode: https://leetcode.com/problems/find-the-least-frequent-digit/
// Language: javascript
// Runtime: 28 ms
// Memory: 59.4 MB
// Submitted: 2025-08-30

/**
 * @param {number} n
 * @return {number}
 */
var getLeastFrequentDigit = function(n) {
    let a = new Array(10).fill(0)

    for(let c of n.toString()) {
        a[Number(c)]++
    }

    let minInd = -1
    let minVal = Infinity

    for(let i = 0; i < a.length; i++) {
        if(a[i] !== 0 && a[i] < minVal) {
            minVal = a[i]
            minInd = i
        }
    }
    console.log(a)
    return minInd
};
