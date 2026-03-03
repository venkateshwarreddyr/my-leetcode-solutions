// Problem: Reveal Cards In Increasing Order
// LeetCode: https://leetcode.com/problems/reveal-cards-in-increasing-order/
// Language: javascript
// Runtime: 61 ms
// Memory: 44.4 MB
// Submitted: 2023-06-24

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
    deck.sort((a, b) => b - a)
    let an = []

    for (let cd of deck) {
        if (an.length > 0)
            an.unshift(an.pop())
        an.unshift(cd)
    }
    return an;
};
