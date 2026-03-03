// Problem: Count Caesar Cipher Pairs
// LeetCode: https://leetcode.com/problems/count-caesar-cipher-pairs/
// Language: javascript
// Runtime: 152 ms
// Memory: 76.4 MB
// Submitted: 2026-01-11

/**
 * @param {string[]} words
 * @return {number}
 */
var countPairs = function (words) {
    let map = new Map();
    let count = 0;
    for (let word of words) {
        let diff =  word.charCodeAt(0) - "a".charCodeAt(0);
        let a = word.split("").map((c, i) => {
            return (c.charCodeAt(0) - diff + 26) % 26;
        });

        let s = a.join(",");
        if (map.has(s)) {
            count += map.get(s);
        }
        map.set(s, (map.get(s) ?? 0) + 1);
    }
    return count;
};

