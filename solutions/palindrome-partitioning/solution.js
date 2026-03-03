// Problem: Palindrome Partitioning
// LeetCode: https://leetcode.com/problems/palindrome-partitioning/
// Language: javascript
// Runtime: 207 ms
// Memory: 73.5 MB
// Submitted: 2024-05-31

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let res = [];

    const backtracking = (s, ind, path) => {
        if (ind === s.length) {
            res.push([...path]);
            return;
        }

        for (let i = ind; i < s.length; i++) {
            if (isPalindrome(s, ind, i)) {
                backtracking(s, i + 1, [...path, s.slice(ind, i + 1)])
            }
        }
    }
    backtracking(s, 0, []);
    return res;
};

function isPalindrome(s, st, end) {
    while (st < end) {
        if (s[st] != s[end]) {
            return false;
        }
        st++;
        end--;
    }
    return true;
}
