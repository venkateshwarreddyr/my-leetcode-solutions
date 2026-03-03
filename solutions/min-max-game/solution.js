// Problem: Min Max Game
// LeetCode: https://leetcode.com/problems/min-max-game/
// Language: javascript
// Runtime: 68 ms
// Memory: 43.7 MB
// Submitted: 2023-05-24

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (a) {

    while (a.length !== 1) {
        let arr = []
        for (let i = 0; i < a.length - 1; i += 2) {
            if (arr.length % 2 === 0) {
                arr.push(Math.min(a[i], a[i + 1]))
            } else {
                arr.push(Math.max(a[i], a[i + 1]))
            }

        }
        a = arr
    }

    return a[0]
};
