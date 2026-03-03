// Problem: Bitwise ORs of Subarrays
// LeetCode: https://leetcode.com/problems/bitwise-ors-of-subarrays/
// Language: javascript
// Runtime: 256 ms
// Memory: 85.6 MB
// Submitted: 2025-10-26

var subarrayBitwiseORs = function (a) {
    let result = new Set()
    let or = 0
    let prevSet = new Set()
    for (let c of a) {
        let currSet = new Set()
        currSet.add(c)
        for (let p of prevSet) {
            currSet.add(p | c)
        }
        for (let x of currSet) result.add(x)
        prevSet = currSet;
    }
    return result.size
};

