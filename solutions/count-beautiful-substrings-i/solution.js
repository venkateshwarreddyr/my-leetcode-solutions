// Problem: Count Beautiful Substrings I
// LeetCode: https://leetcode.com/problems/count-beautiful-substrings-i/
// Language: javascript
// Runtime: 247 ms
// Memory: 56.8 MB
// Submitted: 2025-11-29

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var beautifulSubstrings = function (s, k) {
    let n = s.length
    let ans = 0
    for (let i = 0; i < n; i++) {
        let vowels = 0
        let consonants = 0
        for (let j = i; j < n; j++) {
            if ('aeiou'.includes(s[j])) vowels++
            else consonants++

            if (consonants === vowels && (vowels * vowels % k) === 0) {
                ans++
            }
        }
    }

    return ans
};
