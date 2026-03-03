// Problem: Permutations
// LeetCode: https://leetcode.com/problems/permutations/
// Language: javascript
// Runtime: 58 ms
// Memory: 45.1 MB
// Submitted: 2023-08-02

cl = console.log
/**
 * @param {number[]} a
 * @return {number[][]}
 */
var permute = function (a) {
    let an = []

    function bt(set) {
        if (set.size === a.length) {
            an.push([...set])
            return;
        }
        for (let e of a) {
            if (!set.has(e)) {
                set.add(e)
                bt(set)
                set.delete(e)
            }
        }

    }
    bt(new Set())

    return an;

};
