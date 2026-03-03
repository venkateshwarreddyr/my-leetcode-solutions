// Problem: Check Distances Between Same Letters
// LeetCode: https://leetcode.com/problems/check-distances-between-same-letters/
// Language: javascript
// Runtime: 68 ms
// Memory: 43.6 MB
// Submitted: 2023-05-12

/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, d) {
    let n = s.length;
    let parsed = {}
    for(let i=0; i<n; i++) {
        if(!parsed[s[i]] && s[i] !== s[1+i+d[s.charCodeAt(i) - 97]]){
            return false
        } else {
            parsed[s[i]] = true
        }
    }

    return true
};
