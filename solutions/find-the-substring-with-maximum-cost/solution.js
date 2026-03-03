// Problem: Find the Substring With Maximum Cost
// LeetCode: https://leetcode.com/problems/find-the-substring-with-maximum-cost/
// Language: javascript
// Runtime: 176 ms
// Memory: 57.4 MB
// Submitted: 2023-06-06

/**
 * @param {string} s
 * @param {string} chars
 * @param {number[]} vals
 * @return {number}
 */
var maximumCostSubstring = function(s, chars, vals) {
    let arr = [];
    if(!s.length) return 0;
    
    for(let c of s){
        let ind = chars.indexOf(c)
        if(ind>=0){
            arr.push(vals[ind])
        } else {
            arr.push(c.charCodeAt(0)-96)
        }
    }
    let sum = 0;
    let currSum = 0;

    for(let i=0, j=0;i<arr.length;i++){
        currSum+=arr[i];
        
        if(currSum>sum){
            sum = currSum
        }
        if(currSum<0){
            currSum=0
        }
    }
        console.log(arr);

    return sum;
};
