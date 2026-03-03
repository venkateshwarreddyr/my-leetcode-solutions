// Problem: Count Residue Prefixes
// LeetCode: https://leetcode.com/problems/count-residue-prefixes/
// Language: javascript
// Runtime: 101 ms
// Memory: 64.5 MB
// Submitted: 2026-01-11

/**
 * @param {string} s
 * @return {number}
 */
var residuePrefixes = function (s) {
    let count = 0;
    for (let i = 1; i <= s.length; i++) {
        let ss = s.slice(0, i);
        console.log(ss);
        let set = new Set(ss.split(""));
        if (set.size === ss.length % 3) count++;
    }

    return count;
};

