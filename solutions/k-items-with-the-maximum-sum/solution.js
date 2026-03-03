// Problem: K Items With the Maximum Sum
// LeetCode: https://leetcode.com/problems/k-items-with-the-maximum-sum/
// Language: javascript
// Runtime: 73 ms
// Memory: 43.9 MB
// Submitted: 2023-05-23

/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    let sum = 0;
    for(let i=0;i<numOnes && k!=0;i++){
        sum++;
        k--;
    }
    for(let i=0;i<numZeros && k!=0;i++){
        k--;
    }
    
    for(let i=0;i<numNegOnes && k!=0;i++){
        sum--;
        k--;
    }
    
    
    return sum;
};
