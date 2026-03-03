// Problem: Chunk Array
// LeetCode: https://leetcode.com/problems/chunk-array/
// Language: javascript
// Runtime: 55 ms
// Memory: 44 MB
// Submitted: 2023-12-13

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let a = []
    
    while(arr.length) {
        
        a.push(arr.splice(0, size))
    }

    return a
};

