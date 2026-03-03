// Problem: Sum of All Subset XOR Totals
// LeetCode: https://leetcode.com/problems/sum-of-all-subset-xor-totals/
// Language: javascript
// Runtime: 69 ms
// Memory: 56.2 MB
// Submitted: 2024-05-20

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let n = nums.length;
    let an = 0;
    let obj = {};
    
    let arr = new Array(Math.pow(2, n));
    for(let i=0;i<arr.length;i++){
        arr[i] = new Array(n).fill(0)
    }
    let x = arr.length/2
    for(let j = 0; j<arr[0].length; j++){
        let isOne = true
        for(let i=0;i<arr.length;i++){
            if(i%x === 0){
               isOne = !isOne; 
            }
            arr[i][j] = isOne ? 1 : 0
        }
        x=x/2
    }
    
    for(let i=0;i<arr.length;i++){
        let v = 0;
       for(let j = 0; j<arr[0].length; j++){
           v ^= (arr[i][j] ? nums[j] : 0)
       }
        an+=v
    }
//     const parse = (arr, c) => {
        
//         parse(arr.splice(0,c))
//         parse(arr.splice(c))
//     }
//     return parse(nums, 1)
    
    return an
};
