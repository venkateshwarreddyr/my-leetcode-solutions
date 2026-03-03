// Problem: The Number of Weak Characters in the Game
// LeetCode: https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/
// Language: javascript
// Runtime: 362 ms
// Memory: 89.6 MB
// Submitted: 2023-06-06

var numberOfWeakCharacters = function (a) {
    a.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    // cl = console.log
    // cl(a.join("] ["))

    let n = a.length

    let cc = 0
    let maxd = -Infinity
    for (let i = 0; i < n; i++) {
        let [, rd] = a[i]
        if (rd < maxd) {
            cc++ // weak
        }
        maxd = Math.max(maxd, rd)
    }

    return cc;
};

