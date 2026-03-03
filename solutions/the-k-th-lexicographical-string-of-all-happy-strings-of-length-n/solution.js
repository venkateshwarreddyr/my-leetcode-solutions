// Problem: The k-th Lexicographical String of All Happy Strings of Length n
// LeetCode: https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/
// Language: javascript
// Runtime: 64 ms
// Memory: 45 MB
// Submitted: 2023-07-11

cl = console.log
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
    let abc = "abc"

    function fn(s) {
        if (s.length === n) return --k ? "" : s

        for (let c of abc) {
            if (s && s[s.length - 1] === c) continue;
            let val = fn(s + c)
            if (val) return val
        }

        return ""
    }

    return fn("")
};

