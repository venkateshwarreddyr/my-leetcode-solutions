// Problem: Uncommon Words from Two Sentences
// LeetCode: https://leetcode.com/problems/uncommon-words-from-two-sentences/
// Language: javascript
// Runtime: 57 ms
// Memory: 42.3 MB
// Submitted: 2023-05-25

cl = console.log
var uncommonFromSentences = function (s1, s2) {
    let an = []

    o = {}
    o = {}
    for (let s of s1.split(' ')) {
        o[s] = o[s] || 0
        o[s]++
    }

    for (let s of s2.split(' ')) {
        o[s] = o[s] || 0
        o[s]++
    }

    for (let key in o) {
        if (o[key] === 1) {
            an.push(key)
        }
    }


    return an
};
