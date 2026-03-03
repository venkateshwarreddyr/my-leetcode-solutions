// Problem: Find All Numbers Disappeared in an Array
// LeetCode: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// Language: javascript
// Runtime: 116 ms
// Memory: 50.6 MB
// Submitted: 2021-07-10

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers1 = function(nums) {
    var swap = function(i, j) {
    let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp;
}
    let temp = null
    let renum = []
    for(let i = 0;i<nums.length;i++){
        while(nums[i]!=temp){
            temp = nums[i]
            console.log(nums, i, nums[i]-1)
            swap(nums[i]-1,i)
        }
    }
    return nums.map((e, i) => e!=i+1?i+1:null).filter(e => e)
};

var findDisappearedNumbers2 = function(nums) {
    let obj = {}
    for(let i = 0;i<nums.length;i++){
        obj[nums[i]]=(obj[nums[i]]||0)+1
    }
    return Object.keys(obj)
};
var findDisappearedNumbers = function(nums) {
    let a = []
    let len = nums.length
    nums = new Set(nums)
    for(let i = 1;i<=len;i++){
        if(!nums.has(i)) a.push(i)
    }
    return a
};
