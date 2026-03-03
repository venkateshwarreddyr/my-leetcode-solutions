// Problem: Minimum Hours of Training to Win a Competition
// LeetCode: https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/
// Language: javascript
// Runtime: 63 ms
// Memory: 41.9 MB
// Submitted: 2023-05-30

cl = console.log
var minNumberOfHours = function (ie, iex, e, ex) {
    let an = 0
    let n = e.length;

    for (let i = 0; i < n; i++) {
        if (ie <= e[i]) {
            let x = (e[i] - ie + 1)
            an += x
            ie += x
        }
        if (iex <= ex[i]) {
            let x = (ex[i] - iex + 1)
            an += x
            iex += x
        }
        ie -= e[i]
        iex += ex[i]
    }

    return an;
};

