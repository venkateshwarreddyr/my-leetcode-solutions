// Problem: Third Maximum Number
// LeetCode: https://leetcode.com/problems/third-maximum-number/
// Language: javascript
// Runtime: 80 ms
// Memory: 38.6 MB
// Submitted: 2021-05-13

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const arr = [-Infinity, -Infinity, -Infinity]
    //     let newNums = [... new Set(nums)]
    // newNums.forEach(e => {
    nums.forEach(e => {
        if(arr.includes(e)){
            return
        }
        if(e>arr[0]){
            arr[2] = arr[1]
            arr[1] = arr[0]
            arr[0] = e
        }
        else if(e> arr[1]){
            arr[2] = arr[1]
            arr[1] = e
        }
        else if(e> arr[2] && e != arr[0] && e != arr[1]){
            arr[2] = e
        }
    })
    if(arr[2] != -Infinity) return arr[2]
    return Math.max(arr[0], arr[1])
};



