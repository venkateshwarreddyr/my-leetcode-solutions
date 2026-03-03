// Problem: Check if Object Instance of Class
// LeetCode: https://leetcode.com/problems/check-if-object-instance-of-class/
// Language: javascript
// Runtime: 99 ms
// Memory: 52.1 MB
// Submitted: 2023-12-13

/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
    return (obj !== null && obj !== undefined && typeof classFunction === 'function' && Object(obj) instanceof classFunction) ? Object(obj) instanceof classFunction : false;
};
