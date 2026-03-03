// Problem: Convert a Number to Hexadecimal
// LeetCode: https://leetcode.com/problems/convert-a-number-to-hexadecimal/
// Language: javascript
// Runtime: 84 ms
// Memory: 38.4 MB
// Submitted: 2021-06-05

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    let arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    
    let ans = num===0?'0':'';
    
    while(num!=0 && ans.length<8){
            ans=arr[num & 15]+ans;
            num>>=4
    }
     
    return ans;
};
