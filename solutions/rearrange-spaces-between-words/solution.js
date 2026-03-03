// Problem: Rearrange Spaces Between Words
// LeetCode: https://leetcode.com/problems/rearrange-spaces-between-words/
// Language: javascript
// Runtime: 64 ms
// Memory: 42.4 MB
// Submitted: 2023-06-05

/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
    let spaceCount = 0

    for (let c of text) {
        if (c === " ") {
            spaceCount++
        }
    }
    let a = text.split(" ").filter(e => e)
    let n = (a.length - 1) || 0
    if (n === 0) {
        return a.join("") + " ".repeat(spaceCount)
    }
    return a.join(" ".repeat(Math.floor(spaceCount / (n)))) + " ".repeat(spaceCount % (n))
};
