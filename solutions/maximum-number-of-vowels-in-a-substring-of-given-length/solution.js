// Problem: Maximum Number of Vowels in a Substring of Given Length
// LeetCode: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
// Language: javascript
// Runtime: 17 ms
// Memory: 56.5 MB
// Submitted: 2025-11-27

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let ans = 0
    let n = s.length
    for (let i = 0; i < k; i++) {
        if ('aeiou'.includes(s[i])) ans++
    }
    let max = ans

    for (let j = k; j < n; j++) {
        if ('aeiou'.includes(s[j - k])) {
            ans--
        }
        if ('aeiou'.includes(s[j])) {
            ans++
        }

        max = Math.max(ans, max)
    }

    return max
};
