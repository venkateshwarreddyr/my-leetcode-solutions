// Problem: Find And Replace in String
// LeetCode: https://leetcode.com/problems/find-and-replace-in-string/
// Language: javascript
// Runtime: 0 ms
// Memory: 53.9 MB
// Submitted: 2025-11-30

/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (s, indices, sources, targets) {
    let a = []
    let n = indices.length
    for (let i = 0; i < n; i++) {
        if (s.slice(indices[i]).startsWith(sources[i])) {
            a.push([indices[i], sources[i], targets[i]])
        }
    }
    a.sort((a, b) => b[0] - a[0])

    for (let [i, sr, tr] of a) {
        s = s.slice(0, i) + s.slice(i).replace(sr, tr)
    }

    return s

};
