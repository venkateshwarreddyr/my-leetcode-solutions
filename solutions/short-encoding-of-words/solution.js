// Problem: Short Encoding of Words
// LeetCode: https://leetcode.com/problems/short-encoding-of-words/
// Language: javascript
// Runtime: 1432 ms
// Memory: 46.5 MB
// Submitted: 2023-06-14

cl = console.log
var minimumLengthEncoding = function (words) {
  words = [...new Set(words)]
  let j = 0
  let c = 0
  for (let word of words) {
    let x = words.find((e, i) => {
      if (i == j) return false
      return e.endsWith(word)
    })
    if (!x) {
      c += word.length
      c++
    }
    j++
  }

  return c;
};
