// Problem: Maximum Height of a Triangle
// LeetCode: https://leetcode.com/problems/maximum-height-of-a-triangle/
// Language: javascript
// Runtime: 63 ms
// Memory: 50 MB
// Submitted: 2024-06-30

/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function(red, blue) {
    let curr1 = 1
    let count1 = 0
    let red1 = red
    let blue1 = blue
    
    while(true) {
        if(curr1%2 === 0) {
            if(red1-curr1 >= 0) {
                red1-=curr1
            } else {
                break
            }
        } else {
             if(blue1-curr1 >= 0) {
                blue1-=curr1
            } else {
                break
            }
        }
        count1++
        curr1++
    }
    
        let curr2 = 1
    let count2 = 0
     red1 = red
     blue1 = blue
    
    while(true) {
        if(curr2%2 === 1) {
            if(red1-curr2 >= 0) {
                red1-=curr2
            } else {
                break
            }
        } else {
             if(blue1-curr2 >= 0) {
                blue1-=curr2
            } else {
                break
            }
        }
        count2++
        curr2++
    }
    
    return Math.max(count2, count1)
};
