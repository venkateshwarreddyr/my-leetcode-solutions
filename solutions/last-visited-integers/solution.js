// Problem: Last Visited Integers
// LeetCode: https://leetcode.com/problems/last-visited-integers/
// Language: javascript
// Runtime: 57 ms
// Memory: 44.1 MB
// Submitted: 2023-10-14

/**
 * @param {string[]} words
 * @return {number[]}
 */
var lastVisitedIntegers = function(words) {
    let a = []
    let an = []
    let pointer = -1
    for(let e of words){
        
        if(e === "prev"){
            if(pointer === -1){
                an.push(-1)
            } else {
                
                an.push(a[pointer])
                pointer--
            }
        } else {
            a.push(e)
            pointer = a.length-1
        }
    }
    
    return an
};
