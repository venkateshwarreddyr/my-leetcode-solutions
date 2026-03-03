// Problem: Smallest Palindromic Rearrangement I
// LeetCode: https://leetcode.com/problems/smallest-palindromic-rearrangement-i/
// Language: javascript
// Runtime: 140 ms
// Memory: 66.8 MB
// Submitted: 2025-11-12

function smallestPalindrome(s) {
  const freq = new Map();
  for (const ch of s) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  const chars = Array.from(freq.keys()).sort();
  let firstHalf = "";
  let middle = "";
  let secondHalf = ""

  for (const ch of chars) {
    const count = freq.get(ch);
    if (count % 2 === 1) {
      middle = ch;
    }
    firstHalf += ch.repeat(Math.floor(count / 2));
    secondHalf = ch.repeat(Math.floor(count / 2)) + secondHalf;
  }

  return firstHalf + middle + secondHalf;
}
