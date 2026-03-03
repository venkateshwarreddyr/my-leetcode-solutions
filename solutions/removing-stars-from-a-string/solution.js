// Problem: Removing Stars From a String
// LeetCode: https://leetcode.com/problems/removing-stars-from-a-string/
// Language: javascript
// Runtime: 126 ms
// Memory: 56.5 MB
// Submitted: 2023-06-29

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    let st = []

    for (let c of s) {
        if (c === '*') st.pop()
        else st.push(c)
    }

    return st.join("")
};
