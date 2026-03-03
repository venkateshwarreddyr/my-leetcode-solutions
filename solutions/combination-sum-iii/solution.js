// Problem: Combination Sum III
// LeetCode: https://leetcode.com/problems/combination-sum-iii/
// Language: javascript
// Runtime: 54 ms
// Memory: 42.3 MB
// Submitted: 2023-07-12

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {

    let an = []
    function bt(start, a, sum) {
        if (a.length === k && sum === n) {
            an.push([...a]);
            return;
        }
        if (sum > n || a.length > k) {
            return;
        }

        for (let i = start; i <= 9; i++) {
            a.push(i)
            bt(i + 1, a, sum + i)
            a.pop()
        }
    }
    bt(1, [], 0)

    return an;
};
