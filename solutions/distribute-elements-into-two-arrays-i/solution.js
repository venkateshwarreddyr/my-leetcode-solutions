// Problem: Distribute Elements Into Two Arrays I
// LeetCode: https://leetcode.com/problems/distribute-elements-into-two-arrays-i/
// Language: javascript
// Runtime: 61 ms
// Memory: 51.8 MB
// Submitted: 2024-04-13

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    let arr1 = [nums.shift()]
    let arr2 = [nums.shift()]
    for(let e of nums) {
        if(arr1[arr1.length-1] > arr2[arr2.length-1]) {
            arr1.push(e)
        } else {
             arr2.push(e)
        }
    }


    return [...arr1, ...arr2]
};
