// Problem: Rearrange Words in a Sentence
// LeetCode: https://leetcode.com/problems/rearrange-words-in-a-sentence/
// Language: javascript
// Runtime: 75 ms
// Memory: 46.5 MB
// Submitted: 2023-06-30

/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
    let ob = {}
    let an = text.toLowerCase().split(" ").sort((a, b) => a.length - b.length)
    // let an = []
    // for (let word of words) {
    //     ob[word.length] = ob[word.length] || []
    //     ob[word.length].push(word)
    // }

    // for (let key of Object.keys(ob).sort((a, b) => +a - +b)) {
    //     an.push(...ob[key])
    // }
    an = an.join(" ")
    return an[0].toUpperCase() + an.slice(1);
};
