// Problem: Maximum Odd Binary Number
// LeetCode: https://leetcode.com/problems/maximum-odd-binary-number/
// Language: javascript
// Runtime: 55 ms
// Memory: 44.2 MB
// Submitted: 2023-09-24

cl = console.log
var maximumOddBinaryNumber = function(s) {
    let n = s.length
    let a = new Array(n).fill(0)
    let count = s.split("").reduce((a, c) => a + +c, 0)
    if(!count) return s
    
    if(count){
        a[a.length-1] = 1
        count--
    }
    
    while(count){
        count--
        a[count] = 1
    }
    
    return a.join("")
};
