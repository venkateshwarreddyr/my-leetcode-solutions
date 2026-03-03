// Problem: Number Of Rectangles That Can Form The Largest Square
// LeetCode: https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/
// Language: javascript
// Runtime: 62 ms
// Memory: 46.9 MB
// Submitted: 2023-05-10

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    
    let max = 0;
    
    let counter = 0;
    
    
    
    for(let [l, b] of rectangles){
        let x = Math.min(l, b);
        
        if(x>max){
            max =x;
            counter=0;
        }
        
        if(x === max) counter++
        
    }
    return counter;
};
