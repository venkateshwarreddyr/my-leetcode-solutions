// Problem: Height Checker
// LeetCode: https://leetcode.com/problems/height-checker/
// Language: javascript
// Runtime: 59 ms
// Memory: 49.4 MB
// Submitted: 2024-06-10

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let n = heights.length;
    let c = 0
    let hsorted = [...heights].sort((a,b) => a-b)
    
    for(let i=0; i< n; i++){
        if(hsorted[i] !== heights[i]) c++;
    }
    
    return c;
    
};
