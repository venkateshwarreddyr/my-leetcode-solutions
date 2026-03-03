// Problem: Majority Element
// LeetCode: https://leetcode.com/problems/majority-element/
// Language: javascript
// Runtime: 104 ms
// Memory: 41.4 MB
// Submitted: 2021-05-31

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // let obj  = {};
    // let maxx = 0;
    // let maxv;
    // for (let j = 0; j < nums.length; j++) {
    //     let i = nums[j]
    //     if(!obj[i]) obj[i] =1;
    //     else obj[i]++;
    //     if(obj[i] > maxx)
    //     {
    //         maxx = obj[i];
    //         maxv = i;
    //     }
    // };
    // return maxv;
    let count = 0;
    let ele;
    for(let e of nums){
        if(count === 0)
            ele = e
        if(ele === e) count++;
        else count--
    }
    return ele;
};
