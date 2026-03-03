// Problem: Longest Word in Dictionary through Deleting
// LeetCode: https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/
// Language: javascript
// Runtime: 134 ms
// Memory: 45.6 MB
// Submitted: 2023-06-29

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, words) {
    let an = ""
    for (let word of words) {
        let j = 0
        for (let c of s) {
            if (word[j] === c) {
                j++
            }
        }
        if (j === word.length) {
            if (an.length < word.length)
                an = word
            else if (an.length === word.length)
                an = an < word ? an : word
        }
    }

    return an;
};
