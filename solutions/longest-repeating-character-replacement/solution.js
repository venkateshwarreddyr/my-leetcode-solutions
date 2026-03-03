// Problem: Longest Repeating Character Replacement
// LeetCode: https://leetcode.com/problems/longest-repeating-character-replacement/
// Language: javascript
// Runtime: 15 ms
// Memory: 55.3 MB
// Submitted: 2025-12-27

var characterReplacement = function (s, k) {
    let f = {};
    let maxFreq = 0;
    let maxLength = 0;

    let L = 0;
    for (let R = 0; R < s.length; R++) {
        let ch = s[R];
        f[ch] = (f[ch] ?? 0) + 1;

        maxFreq = Math.max(maxFreq, f[ch]);

        let len = R - L + 1
        const nonMaxFreqCharCount = len - maxFreq;
        if (nonMaxFreqCharCount > k) {
            let leftChar = s[L];
            f[leftChar]--;
            L++;
            // maxFreq = Math.max(...Object.values(f)); // works without this!!
        } else {
            maxLength = Math.max(maxLength, len);
        }
    }

    return maxLength;
};

