// Problem: Partition Equal Subset Sum
// LeetCode: https://leetcode.com/problems/partition-equal-subset-sum/
// Language: javascript
// Runtime: 142 ms
// Memory: 48.2 MB
// Submitted: 2023-03-19

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let set = new Set();
    set.add(0);
    
    let sum = nums.reduce((a, c) => a+c, 0)
    if(sum%2===1) return false;
    const target = sum/2;
    
    for(let e of nums){
        // set.add(e);
        if(e>target) return false;
        let arr = [...set];
        for(let a of arr){
            if(a+e<=target)
             set.add(a+e);
        }
        if(set.has(target)) return true
    }

    return set.has(target);
};
