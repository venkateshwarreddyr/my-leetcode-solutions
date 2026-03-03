// Problem: Find the Power of K-Size Subarrays I
// LeetCode: https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/
// Language: javascript
// Runtime: 2 ms
// Memory: 57.6 MB
// Submitted: 2025-11-21

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (a, k) {
    let n = a.length
    let ans = []
    for (let i = 0; i <= n - k; i++) {
        let consecutive = true
        for (let j = i + 1; j < i + k; j++) {
            if (a[j - 1] + 1 !== a[j]) {
                consecutive = false
                break
            }
        }

        if (consecutive) {
            ans.push(a[i + k - 1])
        } else {
            ans.push(-1)
        }
    }

    return ans
};
