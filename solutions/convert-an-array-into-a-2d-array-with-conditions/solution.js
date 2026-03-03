// Problem: Convert an Array Into a 2D Array With Conditions
// LeetCode: https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/
// Language: javascript
// Runtime: 354 ms
// Memory: 52.8 MB
// Submitted: 2024-01-02

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let obj = {}
    for(let num of nums){
        obj[num] = (obj[num] || 0) +1;
    }
    let ans = [];
    let results = Object.keys(obj).map((key) => [Number(key), obj[key]]).sort((a,b) => b[1]-a[1]);
    
    while(true){
        
    let arr = [];
    
    for(let result of results){
        if(result[1]){
            arr.push(result[0]);
            result[1]--
        }
    }
        
        if(!arr.length) break;
        ans.push(arr);
    }
    console.log({results, ans});
        
    return ans;
};
