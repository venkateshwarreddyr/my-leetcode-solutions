// Problem: Reverse String II
// LeetCode: https://leetcode.com/problems/reverse-string-ii/
// Language: javascript
// Runtime: 94 ms
// Memory: 44.3 MB
// Submitted: 2022-02-02

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let arr = []
    for(let i=0;i<s.length;i+=k,i+=k){
        arr.push(s.slice(i, i+k).split('').reverse().join(''))
        arr.push(s.slice(i+k, i+k+k))
    }
    
    return arr.join('')
};
