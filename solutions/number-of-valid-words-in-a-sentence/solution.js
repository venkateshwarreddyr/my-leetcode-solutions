// Problem: Number of Valid Words in a Sentence
// LeetCode: https://leetcode.com/problems/number-of-valid-words-in-a-sentence/
// Language: javascript
// Runtime: 79 ms
// Memory: 45 MB
// Submitted: 2023-06-05

cl = console.log
var countValidWords = function (s) {
    let words = s.split(" ").filter(e => e)
    let abc = "qwertyuiopasdfghjklzxcvbnm"
    let digits = "0123456789"
    let spl = "!,."
    let cc = 0
    xx:
    for (let word of words) {
        let i = 0
        word = spl.includes(word[word.length - 1]) ? word.slice(0, word.length - 1) : word
        if (word.split("-").length > 2) continue xx;

        for (let c of word) {
            if (digits.includes(c)) continue xx;
            if (spl.includes(c)) continue xx;
            if (c === "-" && (i === word.length - 1 || i === 0)) continue xx;

            i++
        }
        cc++
    }

    return cc
};
