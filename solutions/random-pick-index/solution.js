// Problem: Random Pick Index
// LeetCode: https://leetcode.com/problems/random-pick-index/
// Language: javascript
// Runtime: 286 ms
// Memory: 95.4 MB
// Submitted: 2023-07-18

cl = console.log
/**
 * @param {number[]} nums
 */
var Solution = function (a) {
    let ob = {}
    let obe = {}
    let i = 0
    for (let e of a) {
        ob[e] = ob[e] || []
        ob[e].push(i)
        obe[e] = -1
        i++
    }

    Solution.prototype.pick = function (target) {
        obe[target]++
        return ob[target][obe[target] % ob[target].length]
    };
};

