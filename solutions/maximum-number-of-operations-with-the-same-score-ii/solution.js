// Problem: Maximum Number of Operations With the Same Score II
// LeetCode: https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-ii/
// Language: javascript
// Runtime: 279 ms
// Memory: 67.4 MB
// Submitted: 2024-02-17

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxOperations = function(nums, prev = 0) {
    let ob = {}
    
    function fn(nums, prev = 0, prevop = -1){
        let key = nums.toString() + prev
    // console.log(nums, prev)
        if(ob[key] !== undefined) return ob[key]
    if(nums.length === 0) return 0
    // let x = {
    //     0: nums[0] + nums[1],
    //     1: nums[0] + nums[nums.length - 1],
    //     2: nums[nums.length - 2] + nums[nums.length - 1],
    // }
    // let ch = 0
    let max = 0
    for(let i = 0; i<3;i++) {
        let one, two;
            if(i === 0) {
                one = nums.shift()
                two = nums.shift()
            }
            if(i === 1) {
                one = nums.shift()
                two = nums.pop()
            }
              if(i === 2) {
                one = nums.pop()
                two = nums.pop()
            }
        if(prev === one + two || prev === 0) {

            max =  Math.max(max, 1 + fn(nums, one+two, i))
        
        }
            if(i === 0) {
               nums.unshift(two)
                
                nums.unshift(one)
            }
             if(i === 1) {
         nums.unshift(one)
               nums.push(two)
            }
            
             if(i === 2) {
   nums.push(two)

                 nums.push(one)
            }
    }
    ob[key] = max
    return max
    }
    return fn(nums)
}






// var maxOperations11 = function(nums) {
//     let cc = 0
//     let prev = 0
    
//     while(nums.length) {
//         let x = {
//             0: nums[0] + nums[1],
//             1: nums[0] + nums[nums.length - 1],
//             2: nums[nums.length - 2] + nums[nums.length - 1],
//         }
//     if(cc%3 == 0) {
        
//         nums.pop()
//         nums.shift()
//     }
//             if(cc%3 == 1) {
        
//         nums.shift()
//         nums.shift()
//     }
//             if(cc%3 == 2) {
        
//         nums.pop()
//         nums.pop()
//     }
        
//         if(prev ===0 || prev === x[cc%3]) {
//         cc++
            
//             prev = x[cc%3]
//             continue
//         } else {
//             break
//         }
        
        
//     }
    
//     return cc
// };
