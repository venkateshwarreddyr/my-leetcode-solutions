// Problem: Total Waviness of Numbers in Range I
// LeetCode: https://leetcode.com/problems/total-waviness-of-numbers-in-range-i/
// Language: javascript
// Runtime: 19 ms
// Memory: 60.2 MB
// Submitted: 2025-11-23

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function (num1, num2) {
    let ans = 0
    for (let i = num1; i <= num2; i++) {
        let s = i.toString(10)

        for (let j = 1; j < s.length - 1; j++) {
            let f = s[j - 1]
            let m = s[j]
            let l = s[j + 1]

            if (m > f && m > l) ans++
            if (m < f && m < l) ans++
        }
    }

    return ans
};
