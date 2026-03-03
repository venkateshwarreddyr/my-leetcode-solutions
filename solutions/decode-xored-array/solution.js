// Problem: Decode XORed Array
// LeetCode: https://leetcode.com/problems/decode-xored-array/
// Language: javascript
// Runtime: 104 ms
// Memory: 45.1 MB
// Submitted: 2021-05-29

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let arr = [first];
    for(let i = 0; i< encoded.length; i++){
        // arr[i+1] = Math.abs(encoded[i] - arr[i])
        arr.push(arr[i] ^ encoded[i])
    }
    return arr;
};
