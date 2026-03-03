// Problem: Split a String Into the Max Number of Unique Substrings
// LeetCode: https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/
// Language: javascript
// Runtime: 35 ms
// Memory: 59.5 MB
// Submitted: 2025-10-24

/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function (s) {
    let n = s.length
    let max = 0

    function bt(start, seen) {

        for (let end = start; end < n; end++) {
            const str = s.substring(start, end + 1);
            if (!seen.has(str)) {
                seen.add(str)
                bt(end + 1, seen)
                max = Math.max(seen.size, max)
                seen.delete(str)
            } else {
                continue
            }
        }
    }

    bt(0, new Set())
    return max

};
