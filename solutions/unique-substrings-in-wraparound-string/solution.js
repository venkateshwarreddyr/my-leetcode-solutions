// Problem: Unique Substrings in Wraparound String
// LeetCode: https://leetcode.com/problems/unique-substrings-in-wraparound-string/
// Language: javascript
// Runtime: 13 ms
// Memory: 55.9 MB
// Submitted: 2025-12-02

var findSubstringInWraproundString = function (s) {
    const counts = new Map()
    let maxLen = 0
    let total = 0
    let n = s.length
    for (let i = 0; i < n; i++) {
        if (i > 0 && (s.charCodeAt(i) - s.charCodeAt(i - 1) + 26) % 26 === 1) {
            maxLen++
        } else {
            maxLen = 1
        }

        let char = s[i]
        if(!counts.has(char) || maxLen > counts.get(char)) {
            total+=(maxLen - (counts.get(char) || 0))
            counts.set(char, maxLen)
        }
    }

    return total;
};
