// Problem: Group By
// LeetCode: https://leetcode.com/problems/group-by/
// Language: javascript
// Runtime: 120 ms
// Memory: 69.6 MB
// Submitted: 2023-12-13

cl = console.log
/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let ob = {}

    for(let e of this) {
        let k = fn(e)
        ob[k] = ob[k] || []
        ob[k].push(e)
    }

    return ob
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
