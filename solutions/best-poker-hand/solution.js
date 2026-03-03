// Problem: Best Poker Hand
// LeetCode: https://leetcode.com/problems/best-poker-hand/
// Language: javascript
// Runtime: 48 ms
// Memory: 41.7 MB
// Submitted: 2023-05-26

/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {

    if (new Set(suits).size === 1) {
        return "Flush"
    }
    let obj = {}
    for (let rank of ranks) {
        obj[rank] = obj[rank] || 0
        obj[rank]++
    }
    const max = Math.max(...Object.values(obj))
    if (max >= 3) {
        return "Three of a Kind"
    }
    if (max === 2) {
        return "Pair"
    }

    return "High Card"
};
