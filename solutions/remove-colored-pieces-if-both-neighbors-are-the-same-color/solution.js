// Problem: Remove Colored Pieces if Both Neighbors are the Same Color
// LeetCode: https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/
// Language: javascript
// Runtime: 87 ms
// Memory: 46.1 MB
// Submitted: 2023-10-02

/**
 * @param {string} a
 * @return {boolean}
 */
var winnerOfGame = function (a) {
    let i = 0, j = 0
    let n = a.length
    let scorea = 0
    let scoreb = 0
    while (i < n) {
        if (a[i] === a[i + 1] && a[i + 2] === a[i]) {
            if (a[i] === "A")
                scorea++
            else
                scoreb++
        }
        i++
    }

    return scorea > scoreb
};
