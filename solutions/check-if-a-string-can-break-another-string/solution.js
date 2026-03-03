// Problem: Check If a String Can Break Another String
// LeetCode: https://leetcode.com/problems/check-if-a-string-can-break-another-string/
// Language: javascript
// Runtime: 212 ms
// Memory: 59 MB
// Submitted: 2023-11-02

const checkIfCanBreak = function (s1, s2) {
  const a1 = s1.split('').sort()
  const a2 = s2.split('').sort()

  return (
    a1.every((a, i) => a <= a2[i]) ||
    a1.every((a, i) => a >= a2[i])
  )
}

