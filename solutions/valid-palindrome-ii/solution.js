// Problem: Valid Palindrome II
// LeetCode: https://leetcode.com/problems/valid-palindrome-ii/
// Language: javascript
// Runtime: 99 ms
// Memory: 47.5 MB
// Submitted: 2023-05-22

cl = console.log
var validPalindrome = function (s) {
    let i = 0, j = s.length - 1;
    let deleted = false
    const isPalindreome = (str, i, j) => {
        while (i < j) {
            if (str.at(i) == str.at(j)) {
                i++;
                j--;
            } else return false;
        }
        return true;
    }
    while (i <= j) {
        if (s[i] !== s[j]) {
            return isPalindreome(s, i + 1, j) || isPalindreome(s, i, j - 1)
        } else {
            i++;
            j--;
        }

    }

    return true;
};
