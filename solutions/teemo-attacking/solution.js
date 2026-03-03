// Problem: Teemo Attacking
// LeetCode: https://leetcode.com/problems/teemo-attacking/
// Language: javascript
// Runtime: 58 ms
// Memory: 45.5 MB
// Submitted: 2023-05-30

cl = console.log
var findPoisonedDuration = function (ts, d) {
    let an = 0
    let ends = -1
    for (let start of ts) {
        if (start <= ends) {
            an -= (ends - start + 1)
        }
        an += d
        ends = start + d - 1
    }

    return an
};

