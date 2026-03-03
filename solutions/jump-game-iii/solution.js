// Problem: Jump Game III
// LeetCode: https://leetcode.com/problems/jump-game-iii/
// Language: javascript
// Runtime: 62 ms
// Memory: 51.7 MB
// Submitted: 2023-11-17

cl = console.log
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (a, start) {
    let vis = new Array(a.length)

    let found = false
    function fn(s) {
        if (s < 0 || s >= a.length) return
        if (found) return
        if (vis[s]) return
        vis[s] = 1
        if (a[s] === 0) {
            found = true
        }

        fn(s - a[s])
        fn(s + a[s])
    }
    fn(start)

    return found
};
