// Problem: Finding the Users Active Minutes
// LeetCode: https://leetcode.com/problems/finding-the-users-active-minutes/
// Language: javascript
// Runtime: 269 ms
// Memory: 70.9 MB
// Submitted: 2023-06-24

/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
    let cl = console.log
    let ob = {}
    for (let [id, time] of logs) {
        ob[id] = ob[id] || new Set()
        ob[id].add(time)
    }

    let an = new Array(k).fill(0)

    for (let vals of Object.values(ob)) {
        an[vals.size - 1]++
    }

    return an;
};
