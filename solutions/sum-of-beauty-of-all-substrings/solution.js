// Problem: Sum of Beauty of All Substrings
// LeetCode: https://leetcode.com/problems/sum-of-beauty-of-all-substrings/
// Language: javascript
// Runtime: 469 ms
// Memory: 59.7 MB
// Submitted: 2025-10-15

/**
 * @param {string} s
 * @return {number}
 */

var beautySum = function (s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let map = new Map();

        for (let j = i; j < s.length; j++) {
            let curr = s[j];
            map.set(curr, (map.get(curr) || 0) + 1);

            let freq = Array.from(map.values());
            max = Math.max(...freq);
            min = Math.min(...freq);
            count += max - min;
        }
    }
    return count;
};
