// Problem: Find the Longest Substring Containing Vowels in Even Counts
// LeetCode: https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/
// Language: javascript
// Runtime: 154 ms
// Memory: 79.1 MB
// Submitted: 2023-07-07

cl = console.log
/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
    let n = s.length;
    let sum = 0
    let map = {
        a: 1,
        e: 2,
        i: 4,
        o: 8,
        u: 16,
    }

    let ps = []
    let i = 0
    for (let e of s) {
        ps[i] = map[e] ?? 0
        i++
    }

    i = 0
    let xor = 0
    let ob = { 0: -1 }
    let max = 0
    for (let e of ps) {
        xor = xor ^ e
        ps[i] = xor

        if (ob[xor] !== undefined) {
            max = Math.max(i - ob[xor], max)
        }
        ob[xor] = ob[xor] ?? i
        i++
    }

    return max;
};

/**

      e, l, e, e, t, m, i, n, i, c, o, w, o, r, o, e, p
      2, 2, 0, 2, 2, 2, 6, 6, 2, 2,10,10, 2, 2,10, 8, 8
 */
















