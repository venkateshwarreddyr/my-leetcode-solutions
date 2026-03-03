// Problem: Find the Number of Winning Players
// LeetCode: https://leetcode.com/problems/find-the-number-of-winning-players/
// Language: javascript
// Runtime: 78 ms
// Memory: 55.7 MB
// Submitted: 2024-08-21

/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function(n, pick) {
    let a = new Array(n)

    for(let i=0;i<n;i++) {
        a[i] = {}
    }

    for(let [x, y] of pick) {
        a[x][y] = a[x][y] || 0
        a[x][y]++
    }
    let cc = 0
    for(let i=0;i<n;i++) {
        if(Object.values(a[i]).some(e => e > i)) {
            cc++
        }
    }

    return cc

};
