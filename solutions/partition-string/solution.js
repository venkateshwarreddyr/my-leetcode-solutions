// Problem: Partition String 
// LeetCode: https://leetcode.com/problems/partition-string/
// Language: javascript
// Runtime: 188 ms
// Memory: 76.6 MB
// Submitted: 2025-11-29

/**
 * @param {string} s
 * @return {string[]}
 */
var partitionString = function (s) {
    let set = new Set()
    let temp = ''

    for (let c of s) {
        temp += c

        if (set.has(temp)) continue
        set.add(temp)
        temp = ''
    }


    return [...set]
};
