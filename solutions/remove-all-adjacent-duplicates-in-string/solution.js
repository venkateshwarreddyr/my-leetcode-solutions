// Problem: Remove All Adjacent Duplicates In String
// LeetCode: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
// Language: javascript
// Runtime: 91 ms
// Memory: 51 MB
// Submitted: 2023-05-12

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let n = s.length;
    let an = [s[0]];

    for (let i = 1; i < n; i++) {
        if(an[an.length-1] === s[i]){
            an.pop()
        } else {
            an.push(s[i])
        }
    }

    return an.join('')
};
