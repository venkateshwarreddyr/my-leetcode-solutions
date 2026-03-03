// Problem: Unique Number of Occurrences
// LeetCode: https://leetcode.com/problems/unique-number-of-occurrences/
// Language: javascript
// Runtime: 52 ms
// Memory: 42.5 MB
// Submitted: 2024-01-17

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    
    let obj = {}
    for(let i = 0; i<arr.length;i++){
        obj[arr[i]] = obj[arr[i]]?obj[arr[i]]+1:1
        
    }
    let x = Object.values(obj)
    return x.length === new Set(x).size
};
