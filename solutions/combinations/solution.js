// Problem: Combinations
// LeetCode: https://leetcode.com/problems/combinations/
// Language: javascript
// Runtime: 78 ms
// Memory: 47.5 MB
// Submitted: 2023-08-01

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {

    let an = []
    function bt(start, a) {
        if (a.length === k) {
            an.push([...a])
            return;
        }

        for (let i = start; i <= n; i++) {
            a.push(i)
            bt(i + 1, a)
            a.pop()
        }
    }
    bt(1, [])

    return an
};
