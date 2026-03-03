// Problem: Reformat The String
// LeetCode: https://leetcode.com/problems/reformat-the-string/
// Language: javascript
// Runtime: 72 ms
// Memory: 45 MB
// Submitted: 2023-06-01

/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
    let nums = s.replace(/[a-z]/g, '')
    let albs = s.replace(/[0-9]/g, '')
    if (Math.abs(nums.length - albs.length) > 1) {
        return ""
    }
    let an = ""
    let m = nums.length, n = albs.length
    if (m > n) {
        for (let i = 0; i < m; i++) {
            an += (nums[i] || '')
            an += (albs[i] || '')
        }
    } else {
        for (let i = 0; i < n; i++) {
            an += (albs[i] || '')
            an += (nums[i] || '')
        }
    }

    return an;
};

// a1a1a
