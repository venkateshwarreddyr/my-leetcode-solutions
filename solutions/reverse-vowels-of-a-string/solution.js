// Problem: Reverse Vowels of a String
// LeetCode: https://leetcode.com/problems/reverse-vowels-of-a-string/
// Language: javascript
// Runtime: 86 ms
// Memory: 47.3 MB
// Submitted: 2023-07-21

cl = console.log
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vv = "aeiouAEIOU";
  let a = s.split("");
  let n = a.length;
  let i = 0,
    j = n - 1;

  while (true) {
    while (i<n && vv.indexOf(a[i]) === -1) {
      i++;
    }
    while (j>-1 &&vv.indexOf(a[j]) === -1) {
      j--;
    }
      if(i >= j){
          break;
      }
          
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;

    i++;
    j--;
          
  }

  return a.join("");
};

