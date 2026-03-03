// Problem: DI String Match
// LeetCode: https://leetcode.com/problems/di-string-match/
// Language: javascript
// Runtime: 81 ms
// Memory: 43.7 MB
// Submitted: 2023-05-10

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let n = s.length;
    let perm = new Array(n+1);
    let start = 0
    let end = s.length++;
    for(let i=0;i<n;i++){
        if(s[i] === 'I') {
            perm[i] = start++
        } else {
            perm[i] = end--
        }

    }
    perm[perm.length-1] = end--
    return perm;
};
