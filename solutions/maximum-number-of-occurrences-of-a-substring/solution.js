// Problem: Maximum Number of Occurrences of a Substring
// LeetCode: https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/
// Language: javascript
// Runtime: 543 ms
// Memory: 58.9 MB
// Submitted: 2024-05-29

/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function (s, maxLetters, minSize, maxSize) {
    function max_occ_spl_substr(s) {
        let n = s.length;
        let map = new Map();
        let max = 0;
        for (let i = 0; i < n; i++) {
            for (let j = minSize; j <= maxSize && i+j <= n; j++) {
                let sub_str = s.slice(i, i + j);
                let set = new Set(sub_str);
                if (set.size <= maxLetters) {
                    map.set(sub_str, !map.get(sub_str) ? 1 : map.get(sub_str)+1)
                    max = Math.max(max, map.get(sub_str));
                    break
                }
            }
        }
        return max

    }

    return max_occ_spl_substr(s)
};
