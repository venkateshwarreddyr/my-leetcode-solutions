// Problem: Find Special Substring of Length K
// LeetCode: https://leetcode.com/problems/find-special-substring-of-length-k/
// Language: javascript
// Runtime: 153 ms
// Memory: 60.7 MB
// Submitted: 2025-02-16

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function (s, k) {
    let obj = {};
    // for (let i = 0; i < k; i++) {
    //     obj[s[i]] = obj[s[i]] ?? 0;
    //     obj[s[i]]++;
    // }
    // if (Object.values(obj).includes(k)) return true;
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] = obj[s[i]] ?? 0;
        obj[s[i]]++;

        if (i - k >= 0) {
            obj[s[i - k]] = obj[s[i - k]] ?? 0;
            obj[s[i - k]]--;
        }
        console.log(obj)
        for (let key in obj) {
            if (obj[key] === k && key != s[i - k] && (s[i + 1] ? key != s[i + 1] : true)) {
                return true;
            }
        }
    }

    return false;
};

