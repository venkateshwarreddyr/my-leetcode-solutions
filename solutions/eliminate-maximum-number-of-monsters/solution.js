// Problem: Eliminate Maximum Number of Monsters
// LeetCode: https://leetcode.com/problems/eliminate-maximum-number-of-monsters/
// Language: javascript
// Runtime: 173 ms
// Memory: 66 MB
// Submitted: 2023-11-07

cl = console.log
/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function (dist, speed) {
    let a = dist.map((d, i) => d / speed[i])

    a.sort((a, b) => a - b)

    let ctime = 0

    for (let t of a) {
        if (ctime < t) {
            ctime++
        } else {
            break
        }
    }

    return ctime;


};
