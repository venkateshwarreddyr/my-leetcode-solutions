// Problem: Join Two Arrays by ID
// LeetCode: https://leetcode.com/problems/join-two-arrays-by-id/
// Language: javascript
// Runtime: 346 ms
// Memory: 118 MB
// Submitted: 2023-12-13

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(a, b) {

    let result = {};

    for(const obj of [...a, ...b]) {
        if(!result[obj.id]) {
            result[obj.id] = obj;
            continue;
        } 

        result[obj.id] = {...result[obj.id], ...obj};
    }

    return Object.values(result);
};
