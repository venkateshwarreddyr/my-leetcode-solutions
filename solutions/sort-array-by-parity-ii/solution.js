// Problem: Sort Array By Parity II
// LeetCode: https://leetcode.com/problems/sort-array-by-parity-ii/
// Language: javascript
// Runtime: 82 ms
// Memory: 46.3 MB
// Submitted: 2023-05-12

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let n = nums.length;
    let an = new Array(n)
    let o = 1;
    let e = 0

    for(let i=0; i<n; i++){
        if (nums[i]%2 === 0){
            an[e] = nums[i]
            e+=2
        } else {
            an[o] = nums[i]
            o+=2
        }
    }

    return an;
};

