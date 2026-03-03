// Problem: Count and Say
// LeetCode: https://leetcode.com/problems/count-and-say/
// Language: javascript
// Runtime: 1 ms
// Memory: 55.9 MB
// Submitted: 2025-11-24

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) return '1'
    let res = countAndSay(n - 1);
    let ans = ''

    let curr = res[0]
    let counter = 1

    for (let i = 1; i < res.length; i++) {
        if (res[i] === curr) {
            counter++
        } else {
            ans += counter
            ans += curr

            curr = res[i]
            counter = 1
        }
    }
    ans += counter
    ans += curr


    return ans
};
