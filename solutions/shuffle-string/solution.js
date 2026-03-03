// Problem: Shuffle String
// LeetCode: https://leetcode.com/problems/shuffle-string/
// Language: javascript
// Runtime: 76 ms
// Memory: 40.5 MB
// Submitted: 2021-07-20

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, ind) {
    let n = new Array(s.length)
    for(let i = 0; i< ind.length;i++){
        n[ind[i]] = s[i]   
    };
    return n.join('')
};
