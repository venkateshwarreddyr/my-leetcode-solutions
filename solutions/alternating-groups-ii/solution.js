// Problem: Alternating Groups II
// LeetCode: https://leetcode.com/problems/alternating-groups-ii/
// Language: javascript
// Runtime: 67 ms
// Memory: 75 MB
// Submitted: 2025-11-29

/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (a, k) {
    a = [...a, ...a.slice(0, k - 1)]

    let ans = 0
    let cc = 1
    for (let i = 1; i < a.length; i++) {
        if (a[i] !== a[i - 1]) cc++
        else cc = 1
        if (cc >= k) ans++;
    }

    return ans
};
/**
0,1,0,0,1,0,1,0,1,0,0,1,0

 */
