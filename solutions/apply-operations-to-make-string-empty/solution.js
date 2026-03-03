// Problem: Apply Operations to Make String Empty
// LeetCode: https://leetcode.com/problems/apply-operations-to-make-string-empty/
// Language: javascript
// Runtime: 356 ms
// Memory: 61.6 MB
// Submitted: 2024-02-17

/**
 * @param {string} s
 * @return {string}
 */
var lastNonEmptyString = function(s) {
    let ob = {}
    
    for(let c of s) {
        ob[c] = ob[c] || 0
        ob[c]++
    }
    
    let max = Math.max(...Object.values(ob))
    let an = {}
    for(let key in ob) {
        if(ob[key] === max) {
            an[key] = max
        }
    }
    
    let ans = ""
    for(let c of s) {
        if(an[c] !== undefined) {
            if(an[c] === 1) ans+=c
            an[c]--
        }
    }
    
    return ans
};
