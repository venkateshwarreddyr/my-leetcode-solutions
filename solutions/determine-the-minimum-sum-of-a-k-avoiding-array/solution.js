// Problem: Determine the Minimum Sum of a k-avoiding Array
// LeetCode: https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/
// Language: javascript
// Runtime: 88 ms
// Memory: 47.8 MB
// Submitted: 2023-08-20

cl = console.log
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minimumSum = function(n, k) {
    let ob = {}
    let a = []
    for(let i = 1; a.length<n;i++){
        if(ob[k-i]) continue
        ob[i] = 1
        a.push(i)
    }

    return a.reduce((a, c) => a+c, 0)
};
