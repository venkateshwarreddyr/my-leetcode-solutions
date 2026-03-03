// Problem: Longest Uncommon Subsequence II
// LeetCode: https://leetcode.com/problems/longest-uncommon-subsequence-ii/
// Language: javascript
// Runtime: 3 ms
// Memory: 54.7 MB
// Submitted: 2025-12-25

function isSubsequenceOf(sub, s) {
    if (!sub.length) return true;
    if (sub.length > s.length) return false;

    let i = 0;
    for (let ch of s) {
        if (ch === sub[i]) {
            i++
            if (i === sub.length) return true;
        }
    }
    return false;
}

var findLUSlength = function (a) {
    a.sort((a, b) => b.length - a.length)
    let max = -1;
    OUTER:
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (i !== j && isSubsequenceOf(a[i], a[j])) {
                continue OUTER;
            }
        }
        return a[i].length
    }
    return max;
};

