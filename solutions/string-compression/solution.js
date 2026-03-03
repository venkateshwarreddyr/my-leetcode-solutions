// Problem: String Compression
// LeetCode: https://leetcode.com/problems/string-compression/
// Language: javascript
// Runtime: 2 ms
// Memory: 59.1 MB
// Submitted: 2025-11-29

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {

    let ans = ''

    let curr = chars[0]
    let count = 1

    for (let i = 1; i < chars.length; i++) {
        if (curr === chars[i]) {
            count++
        } else {
            if (count === 1) ans += (curr)
            else ans += (curr + count)
            curr = chars[i]
            count = 1
        }
    }
    if (count === 1) ans += (curr)
    else ans += (curr + count) 

    for (let i = 0; i < ans.length; i++) {
        chars[i] = ans[i]
    }

    return ans.length

};
