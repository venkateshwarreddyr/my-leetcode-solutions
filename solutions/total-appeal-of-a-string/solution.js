// Problem: Total Appeal of A String
// LeetCode: https://leetcode.com/problems/total-appeal-of-a-string/
// Language: javascript
// Runtime: 31 ms
// Memory: 58.8 MB
// Submitted: 2026-01-16

var appealSum = function (s) {
    const seen = new Map();
    let n = s.length
    let res = 0;

    for (let i = 0; i < n; i++) {
        let left = 0
        if (seen.has(s[i])) {
            left = i - seen.get(s[i])
        } else {
            left = i + 1
        }
        let right = n - i
        res += (left * right);
        seen.set(s[i], i)
    }
    return res;
};

function appealSum22(s) {
    s = s.split('').map(ch => ch.charCodeAt() - 'a'.charCodeAt());
    const n = s.length;

    const prevIndex = Array(26).fill(-1);
    let totalContributionOfAllPrevSSes = 0;
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        let newContributionToSSesEndingAti_dueToNewCh = i - prevIndex[ch]
        totalContributionOfAllPrevSSes += newContributionToSSesEndingAti_dueToNewCh;
        res += totalContributionOfAllPrevSSes;
        prevIndex[ch] = i;
    }
    return res;
}

// Input: s = "code"   Output: 20
// Input: s = "abbca"  Output: 28
