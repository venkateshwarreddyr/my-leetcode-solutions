// Problem: Extra Characters in a String
// LeetCode: https://leetcode.com/problems/extra-characters-in-a-string/
// Language: javascript
// Runtime: 111 ms
// Memory: 48.3 MB
// Submitted: 2023-09-03


var minExtraChar = function (s, ws) {
    let n = s.length
    let skips = new Array(n + 1).fill(0)

    for (let i = 0; i < n; i++) {
        skips[i + 1] = skips[i] + 1
        let prefix = s.slice(0, i + 1)
        for (let w of ws) {
            if (prefix.endsWith(w)) {
                skips[i + 1] = Math.min(skips[i + 1], skips[i - w.length + 1])
            }
        }
    }

    return skips[n]
}
