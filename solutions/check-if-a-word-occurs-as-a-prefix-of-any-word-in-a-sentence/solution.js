// Problem: Check If a Word Occurs As a Prefix of Any Word in a Sentence
// LeetCode: https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
// Language: javascript
// Runtime: 48 ms
// Memory: 42.2 MB
// Submitted: 2023-05-25

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    let words = sentence.split(" ")

    let i = 0
    for (let word of words) {
        if (word.startsWith(searchWord)) {
            return i + 1
        }
        i++
    }

    return -1
};
