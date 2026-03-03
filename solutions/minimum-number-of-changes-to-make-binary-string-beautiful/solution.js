// Problem: Minimum Number of Changes to Make Binary String Beautiful
// LeetCode: https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/
// Language: javascript
// Runtime: 92 ms
// Memory: 49.4 MB
// Submitted: 2023-10-28

/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    let an = 0
    for(let i=0;i<s.length;i+=2){
        let set = new Set(s.slice(i, i+2))   
        if(set.size === 2){
            an++
        }
    }
    
    return an
};
