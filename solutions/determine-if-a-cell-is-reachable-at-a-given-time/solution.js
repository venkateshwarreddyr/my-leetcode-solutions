// Problem: Determine if a Cell Is Reachable at a Given Time
// LeetCode: https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/
// Language: javascript
// Runtime: 53 ms
// Memory: 43.1 MB
// Submitted: 2023-11-08

cl = console.log
var isReachableAtTime = function(sx, sy, fx, fy, t) {
    const d1 = (x1, y1, x2, y2) => {
        let a = Math.abs(x2 - x1)
        let b = Math.abs(y2 - y1)
        // if(b<a){
        //     [a, b] = [b, a];
        // }
        
        return Math.max(a, b)
    }
    
    let an = d1(sx, sy, fx, fy)
    if(an === 0 && t === 1) return false
    return an<=t
};
