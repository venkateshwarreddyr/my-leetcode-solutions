// Problem: Longest Word in Dictionary
// LeetCode: https://leetcode.com/problems/longest-word-in-dictionary/
// Language: javascript
// Runtime: 15 ms
// Memory: 62.7 MB
// Submitted: 2025-12-18

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    words.sort((a, b) => a.length - b.length);
    let set = new Set()
    set.add('')
    let ans = ''
    for (let word of words) {
        if (set.has(word.slice(0, word.length - 1))) {
            set.add(word)
            if (ans.length < word.length) ans = word
            if (ans.length === word.length) ans = [word, ans].sort()[0]
        }
    }

    return ans
};
