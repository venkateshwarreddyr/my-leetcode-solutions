// Problem: Defanging an IP Address
// LeetCode: https://leetcode.com/problems/defanging-an-ip-address/
// Language: javascript
// Runtime: 68 ms
// Memory: 38.5 MB
// Submitted: 2021-07-20

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.replaceAll('.', '[.]')
};
