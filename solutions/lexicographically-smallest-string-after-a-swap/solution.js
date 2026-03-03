// Problem: Lexicographically Smallest String After a Swap
// LeetCode: https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/
// Language: javascript
// Runtime: 62 ms
// Memory: 50.8 MB
// Submitted: 2024-07-14

/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function(s) {
    s = s.split('').map(e => +e)
    let n = s.length
    for(let i=1;i<n;i++) {
        if((s[i]%2) === (s[i-1]%2) && s[i] < s[i-1]) {
            let temp = s[i]
            s[i] = s[i-1]
            s[i-1] = temp
            break
        }
    }

    return s.join('')
};
