// Problem: Number of Equivalent Domino Pairs
// LeetCode: https://leetcode.com/problems/number-of-equivalent-domino-pairs/
// Language: javascript
// Runtime: 93 ms
// Memory: 52.7 MB
// Submitted: 2023-06-06

cl = console.log

numEquivDominoPairs = function (dominoes) {
    let obj = {}
    dominoes.forEach(([a, b]) => {
        if (a > b) {
            [b, a] = [a, b]
        }

        let x = [a, b].toString()
        obj[x] = (obj[x] || 0) + 1
    })
    let an = Object.values(obj).filter(e => e !== 1)
    return an.reduce((a, c) => {
        let x = c * (c - 1) / 2
        return a + x
    }, 0)
};
