// Problem: Queue Reconstruction by Height
// LeetCode: https://leetcode.com/problems/queue-reconstruction-by-height/
// Language: javascript
// Runtime: 106 ms
// Memory: 51.2 MB
// Submitted: 2023-07-22

cl = console.log
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (a) {
    let n = a.length
    let an = []
    a.sort((a, b) => b[0] - a[0] || a[1] - b[1])
    cl(a)
    a.forEach(([h, n]) => {
        an.splice(n, 0, [h, n]); //    insert each element at n
    });
    return an
};
