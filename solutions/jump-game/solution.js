// Problem: Jump Game
// LeetCode: https://leetcode.com/problems/jump-game/
// Language: javascript
// Runtime: 77 ms
// Memory: 46.6 MB
// Submitted: 2023-06-11

cl = console.log
var canJump = function (a) {
    let n = a.length;
    let goal = n - 1

    for (let j = n - 2; j > -1; j--) {
        if (j + a[j] >= goal) {
            goal = j
        }
    }

    return goal === 0
};
