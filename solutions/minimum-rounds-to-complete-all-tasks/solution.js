// Problem: Minimum Rounds to Complete All Tasks
// LeetCode: https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/
// Language: javascript
// Runtime: 209 ms
// Memory: 56.8 MB
// Submitted: 2023-07-18

/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (a) {
    let ob = {}

    for (let e of a) {
        ob[e] = ob[e] || 0
        ob[e]++
    }

    let an = 0

    for (let v of Object.values(ob)) {
        if (v === 1) return -1
        an += Math.ceil(v / 3)
    }

    return an;
};
