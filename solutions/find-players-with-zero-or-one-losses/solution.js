// Problem: Find Players With Zero or One Losses
// LeetCode: https://leetcode.com/problems/find-players-with-zero-or-one-losses/
// Language: javascript
// Runtime: 535 ms
// Memory: 106.9 MB
// Submitted: 2023-07-20

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    let wn = {}
    let ls = {}
    let set = new Set()
    for (let [w, l] of matches) {
        set.add(w)
        set.add(l)

        wn[w] = wn[w] || 0
        wn[w]++

        ls[l] = ls[l] || 0
        ls[l]++
    }

    let wp0l = []
    let wp1l = []
    for (let p of set) {
        if (wn[p] && !ls[p]) {
            wp0l.push(p)
        } else if (ls[p] === 1) {
            wp1l.push(p)
        }
    }

    return [wp0l.sort((a, b) => a - b), wp1l.sort((a, b) => a - b)]
};
