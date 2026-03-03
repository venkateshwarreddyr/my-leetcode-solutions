// Problem: Find Occurrences of an Element in an Array
// LeetCode: https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/
// Language: javascript
// Runtime: 272 ms
// Memory: 87.2 MB
// Submitted: 2024-05-26

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function(nums, queries, x) {
    let ob = {}
    let i = 0
    let occ = 0
    for(let e of nums) {
        if(e === x) {
            ob[++occ] = i
        }
        i++
    }
    
    return queries.map(e => {
        return ob[e] ?? -1
    })
    
};
