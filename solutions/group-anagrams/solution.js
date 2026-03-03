// Problem: Group Anagrams
// LeetCode: https://leetcode.com/problems/group-anagrams/
// Language: javascript
// Runtime: 128 ms
// Memory: 53.1 MB
// Submitted: 2023-06-30

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let n = strs.length;
    let ob = {};

    for (let s of strs) {
        let w = s.split("").sort().join("")
        if (!ob[w]) {
            ob[w] = [s]
        } else {
            ob[w].push(s)
        }
    }
    return Object.values(ob);
};
