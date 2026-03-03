// Problem: Move Pieces to Obtain a String
// LeetCode: https://leetcode.com/problems/move-pieces-to-obtain-a-string/
// Language: javascript
// Runtime: 27 ms
// Memory: 60.5 MB
// Submitted: 2026-02-03

/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
    let lCount = 0
    let rCount = 0
    let n = start.length
    for (let i = 0; i < n; i++) {
        if (start.at(i) === 'L') {
            if (rCount > 0) return false
            lCount++
        } else if (start.at(i) === 'R') {
            rCount++
        }

        if (target.at(i) === 'L') {
            lCount--
        } else if (target.at(i) === 'R') {
            if (lCount < 0) return false
            rCount--
        }
        if (rCount < 0) return false
        if (lCount > 0) return false
    }

    if(rCount || lCount) return false

    return true
};
