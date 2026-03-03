// Problem: Time Needed to Rearrange a Binary String
// LeetCode: https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/
// Language: javascript
// Runtime: 116 ms
// Memory: 44.7 MB
// Submitted: 2023-06-29

cl = console.log
/**
 * @param {string} s
 * @return {number}
 */
var secondsToRemoveOccurrences = function (s) {
    let a = s.split("").map(e => +e);
    let n = a.length;
    let c = 0
    let changed = true
    while (changed) {
        changed = false
        for (let i = 0; i < n - 1; i++) {
            if (!a[i] && a[i + 1]) {
                a[i] = 1
                a[i + 1] = 0
                i++
                changed = true
            }
        }
        if (changed)
            c++
    }

    return c

};
