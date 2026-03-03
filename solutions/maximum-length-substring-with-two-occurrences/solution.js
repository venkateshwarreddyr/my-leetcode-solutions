// Problem: Maximum Length Substring With Two Occurrences
// LeetCode: https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/
// Language: javascript
// Runtime: 78 ms
// Memory: 52 MB
// Submitted: 2024-03-24

/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let n = s.length;
    let ob = {};
    let an = 0
    for(let i=0, j=0;j<n;j++) {
        while(ob[s[j]] === 2) {
            ob[s[i]]--
            i++
        } 

            ob[s[j]] = ob[s[j]] ?? 0
            ob[s[j]]++
        

        an = Math.max(an, j - i + 1);
    }

    return an
};
