// Problem: Minimum Operations to Make Binary Palindrome
// LeetCode: https://leetcode.com/problems/minimum-operations-to-make-binary-palindrome/
// Language: javascript
// Runtime: 1315 ms
// Memory: 65.3 MB
// Submitted: 2025-12-06

function isPalindrome(n) {
  const s = n.toString(2);
  return s === s.split('').reverse().join('');
}

var minOperations = function (nums) {
    let ans = [];
    for (let num of nums) {
        for (let i = 0; i < num; i++) {
            if(isPalindrome(num - i) || isPalindrome(num + i)) {
                ans.push(i)
                break;
            }
        }
    }

    return ans;
};

