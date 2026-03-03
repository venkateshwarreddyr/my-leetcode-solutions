// Problem: Bag of Tokens
// LeetCode: https://leetcode.com/problems/bag-of-tokens/
// Language: javascript
// Runtime: 10 ms
// Memory: 55.7 MB
// Submitted: 2025-12-08

/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
    if (tokens.length === 0) return 0
    tokens.sort((a, b) => a - b)
    if (tokens[0] > power) return 0
    let score = 1

    power -= tokens[0]
    let n = tokens.length
    console.log({ power, score })
    for (let i = 1, j = n - 1; i <= j;) {
        if (tokens[i] <= power) {
            power -= tokens[i]
            score++
            i++
        } else {
            if (i === j) break
            power += tokens[j]
            j--
            score--
        }
    }

    return score
};
