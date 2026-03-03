// Problem: Subsets
// LeetCode: https://leetcode.com/problems/subsets/
// Language: javascript
// Runtime: 71 ms
// Memory: 52.8 MB
// Submitted: 2024-05-21

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let arr = [[]]
    for (let num of nums) {
        for (let curr of arr)
            if (!curr.includes(num)) {
                let a = [...curr]
                a.push(num)
                arr.push(a)
            }
    }

    return arr;
};
