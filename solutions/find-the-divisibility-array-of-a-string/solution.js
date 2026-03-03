// Problem: Find the Divisibility Array of a String
// LeetCode: https://leetcode.com/problems/find-the-divisibility-array-of-a-string/
// Language: javascript
// Runtime: 225 ms
// Memory: 64 MB
// Submitted: 2023-06-06

/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function(word, m) {
    let num = 0;
    let ans = [];
    
    for(let i=0;i<word.length;i++){
        num = num*10 + Number(word[i]);
        // console.log({num})
        if(num%m === 0)
        {
            ans.push(1);
             num=0;
        
        }
        else {
            num = num%m;
            ans.push(0);
        }
        
    }
    
    return ans;
};
