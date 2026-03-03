// Problem: Partition String Into Minimum Beautiful Substrings
// LeetCode: https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/
// Language: javascript
// Runtime: 75 ms
// Memory: 44.5 MB
// Submitted: 2023-07-09

cl = console.log
/**
 * @param {string} s
 * @return {number}
 */
var minimumBeautifulSubstrings = function (s) {
    let a = [
        '1',
        '101',
        '11001',
        '1111101',
        '1001110001',
        '110000110101',
        '11110100001001',
    ]

    let cc = Infinity

    function fn(s, t) {
        if (!s.length) {
            cc = Math.min(cc, t)
        }
        if (s[0] === '0') {
            return;
        }

        for (let e of a) {
            if (s.startsWith(e)) {
                fn(s.replace(e, ""), t + 1)
            }
        }

    }

    fn(s, 0)

    return cc === Infinity ? -1 : cc
};
