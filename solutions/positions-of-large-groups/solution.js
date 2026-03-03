// Problem: Positions of Large Groups
// LeetCode: https://leetcode.com/problems/positions-of-large-groups/
// Language: javascript
// Runtime: 73 ms
// Memory: 44.5 MB
// Submitted: 2023-05-31

cl = console.log
var largeGroupPositions = function (s) {
    let n = s.length
    let i = 0
    let j = 0
    let an = []
    while (i < n) {
        while (s[i] === s[j]) {
            j++
        }
        if (j - i >= 3) {
            an.push([i, j - 1])
            i = j
        } else {
            i++
        }
    }

    return an;
};
