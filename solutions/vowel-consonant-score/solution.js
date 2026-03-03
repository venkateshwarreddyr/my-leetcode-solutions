// Problem: Vowel-Consonant Score
// LeetCode: https://leetcode.com/problems/vowel-consonant-score/
// Language: javascript
// Runtime: 2 ms
// Memory: 58 MB
// Submitted: 2026-01-18

var vowelConsonantScore = function (s) {
    let vo = ["a", "e", "i", "o", "u"];

    let v = 0;
    let c = 0;
    for (let ch of s) {
        if (ch === " ") continue;
        if (/[0-9]/.test(+ch)) continue;
        if (vo.includes(ch)) v++;
        else c++;
    }
    let score;
    if (c > 0) {
        score = Math.floor(v / c);
    } else {
        score = 0;
    }
    return score;
};

