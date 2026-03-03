// Problem: Sort Array by Increasing Frequency
// LeetCode: https://leetcode.com/problems/sort-array-by-increasing-frequency/
// Language: javascript
// Runtime: 77 ms
// Memory: 54.5 MB
// Submitted: 2024-07-23

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    let n = nums.length;
    let ob = {};
    let an = [];
    for(let num of nums){
        ob[num] = ++ob[num] || 1
    }


    for(let [k, v] of Object.entries(ob).sort((a, b) => a[1] - b[1] || b[0] - a[0])){
            an = an.concat(new Array(v).fill(k));
    }

    return an

};
