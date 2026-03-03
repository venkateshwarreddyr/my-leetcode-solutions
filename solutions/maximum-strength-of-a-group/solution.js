// Problem: Maximum Strength of a Group
// LeetCode: https://leetcode.com/problems/maximum-strength-of-a-group/
// Language: javascript
// Runtime: 91 ms
// Memory: 47.8 MB
// Submitted: 2023-05-27

cl = console.log
var maxStrength = function(a) {
    let len = a.length
    
    a=a.filter(e => e)
    
    
    // cl(a)
    if(a.length === 0){
        return 0
    }
    if(a.length===1) {
        if(a[0]===0) return 0
        if(a[0] < 0) {
            if(len!==a.length){
                return 0
            }
            return a[0]
        }
    }
    
    let p = a.filter(e => e>0)
    let n = a.filter(e => e<0).sort((a,b) => a-b)
    
    
    let anp = p.reduce((a,c) => a*c, 1)
    
    if(n.length%2===1){
        n.pop()
    }
    
    let ann = n.reduce((a,c) => a*c, 1)
    
    return anp*ann
    
};
