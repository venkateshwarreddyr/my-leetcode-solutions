// Problem: Sum of All Odd Length Subarrays
// LeetCode: https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
// Language: javascript
// Runtime: 76 ms
// Memory: 38.4 MB
// Submitted: 2021-06-12

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let oddNums = [1,3,5,7,9]
    
    let sum = 0;
    let len = arr.length
    // let odds = Math.ceil(len/2);
    let oddNum = 1;
    // while(oddNum<=len){
        for(let i = 0; i<=len-oddNum; i++){
             for(let j =i; j<oddNum+i; j++){
                sum+=arr[j];
            }
        // }
        if(i === len-oddNum)
        {oddNum+=2;
        i = -1;}
    }
    return sum;
};
