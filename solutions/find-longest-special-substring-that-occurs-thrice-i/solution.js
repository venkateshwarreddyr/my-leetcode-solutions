// Problem: Find Longest Special Substring That Occurs Thrice I
// LeetCode: https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/
// Language: javascript
// Runtime: 74 ms
// Memory: 48.8 MB
// Submitted: 2024-01-17

var maximumLength = function (s) {
  const SMALL_ALPHA = "abcdefghijklmnopqrstuvwxyz";
  const n = s.length;
  const chLenFreq = {};
  for (const ch of SMALL_ALPHA) chLenFreq[ch] = Array(n + 1).fill(0);
  let freq = 0;
  let prev = "";
  for (const ch of s) {
    if (ch === prev) freq++;
    else freq = 1;
    chLenFreq[ch][freq]++;
    prev = ch;
  }
  let maxLen = -1;
  for (const lenFreqArrayOfAChar of Object.values(chLenFreq)) {
    let repeatedTimes = 0;
    for (let len = n; len >= 1; len--) {
      repeatedTimes += lenFreqArrayOfAChar[len];
      if (repeatedTimes >= 3) {
        maxLen = Math.max(maxLen, len);
        break;
      }
    }
  }
  return maxLen;
};
