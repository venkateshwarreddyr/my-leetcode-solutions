// Problem: All Divisions With the Highest Score of a Binary Array
// LeetCode: https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/
// Language: javascript
// Runtime: 672 ms
// Memory: 78.7 MB
// Submitted: 2022-01-30

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxScoreIndices = function(nums) {
    let max = 0
    let arr = []
    let count = 0

    for(let j=0;j<nums.length;j++){
         if(nums[j] === 1) count++
    }
    
    for(let i=0;i<nums.length+1;i++){
        if(count>max){
            max=count
            arr=[i]
        }else if(count === max){
            arr.push(i)
        }  
        
        if(nums[i]===0){
            count++
        }else if(nums[i]===1){
            count--
        }
        // console.log(count)
       
        
    }
    
        // console.log()
//     obj = Object.entries(obj)
//     .sort(([,a],[,b]) => b-a)
//     .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    
//     console.log(obj)
//     let arr = []
//     for(let [key, value] of Object.entries(obj)){
//         if(value=== Object.values(obj)[Object.entries(obj).length-1])
//             arr.push(key)
//     }
    return arr
};
