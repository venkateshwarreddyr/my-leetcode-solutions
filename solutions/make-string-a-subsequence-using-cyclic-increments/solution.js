// Problem: Make String a Subsequence Using Cyclic Increments
// LeetCode: https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/
// Language: javascript
// Runtime: 143 ms
// Memory: 59.3 MB
// Submitted: 2023-08-19

cl = console.log
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    let a = str1.split("").map(e => e.charCodeAt(0) - "a".charCodeAt(0))
    let b = str2.split("").map(e =>  e.charCodeAt(0) - "a".charCodeAt(0) )
    let an = a.length
    let bn = b.length
    let i=0, j=0
    // cl(a)
    // cl(b)
    while(i<an&&j<bn){
        if(a[i] === b[j]){
            i++
            j++
        } else if((a[i]+1)%26 === b[j]){
            i++
            j++
        } else {
            i++
        }
    }
    
    if(j === bn) return true
    return false
};
