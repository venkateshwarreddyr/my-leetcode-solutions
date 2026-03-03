// Problem: Longest Palindrome After Substring Concatenation I
// LeetCode: https://leetcode.com/problems/longest-palindrome-after-substring-concatenation-i/
// Language: javascript
// Runtime: 186 ms
// Memory: 63 MB
// Submitted: 2026-01-05

function listAllSubstrings(str) {
    const n = str.length;
    const res = [''];
    for (let i = 0; i < n; i++) {
        let sub = '';
        for (let j = i; j < n; j++) {
            sub += str[j];
            res.push(sub);
        }
    }
    return res;
}

function isPalindrome(s) {
    for (let l = 0, r = s.length - 1; l < r; l++, r--) {
        if (s[l] !== s[r]) {
            return false;
        }
    }
    return true;
}

function longestPalindrome(s, t) {
    const subsS = listAllSubstrings(s);
    const subsT = listAllSubstrings(t);

    let longest = 0;
    for (const left of subsS) {
        for (const right of subsT) {
            const combined = left + right;
            if (combined.length > longest && isPalindrome(combined)) {
                longest = combined.length;
            }
        }
    }
    return longest;
}

