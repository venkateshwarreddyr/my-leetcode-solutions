// Problem: Check if Array is Good
// LeetCode: https://leetcode.com/problems/check-if-array-is-good/
// Language: javascript
// Runtime: 62 ms
// Memory: 43.3 MB
// Submitted: 2023-07-22

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(a) {
    a.sort((a,b) => a-b)
    
    if(a[a.length-1] !== a[a.length-2]) return false
    a.pop()
    let i=0
    for(let e of a){
        i++
        if( e === i) continue
        return false
    }
    
    return true
};
