// Problem: Beautiful Arrangement
// LeetCode: https://leetcode.com/problems/beautiful-arrangement/
// Language: javascript
// Runtime: 181 ms
// Memory: 41.9 MB
// Submitted: 2023-07-19

cl = console.log
/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {

    let cc = 0

    let visited = 0
    function bt(j) {
        if (j === n + 1) {
            cc++
        }

        for (let i = 1; i <= n; i++) {
            if ((j % i === 0 || i % j === 0) && !(visited & (1 << i))) {
                visited |= (1 << i)

                bt(j + 1)

                visited ^= (1 << i)
            }
        }
    }

    bt(1)

    return cc;
};
