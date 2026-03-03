// Problem: Maximum Score Words Formed by Letters
// LeetCode: https://leetcode.com/problems/maximum-score-words-formed-by-letters/
// Language: javascript
// Runtime: 92 ms
// Memory: 47.1 MB
// Submitted: 2023-07-11

cl = console.log
/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {
    let abc = "abcdefghijklmnopqrstuvwxyz"
    let n = words.length;
    let ob = {}
    for (let c of abc) {
        ob[c] = 0
    }
    for (let c of letters) {
        ob[c]++
    }
    let maxScore = 0
    function bt(i, sc, ob) {
        if (sc > maxScore) {
            maxScore = sc
        }

        for (let j = i; j < n; j++) {
            let cc = 0
            for (let c of words[j]) {
                ob[c]--
                cc += score[abc.indexOf(c)]
            }

            if (Object.values(ob).reduce((a, c) => c >= 0 && a, true))
                bt(j + 1, sc + cc, ob)
            for (let c of words[j]) {
                ob[c]++
            }
        }
    }

    bt(0, 0, ob)

    return maxScore;
};
