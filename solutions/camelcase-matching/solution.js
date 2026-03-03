// Problem: Camelcase Matching
// LeetCode: https://leetcode.com/problems/camelcase-matching/
// Language: javascript
// Runtime: 67 ms
// Memory: 41.8 MB
// Submitted: 2023-06-14

/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, p) {

    return queries.map(q => {
        let i = 0, j = 0;
        while (q.length !== i) {
            if (q[i] === p[j]) {
                i++
                j++
            } else if (q[i].charCodeAt() < 97) {
                return false
            }
            else {
                i++
            }
        }

        return j === p.length
    })
};


