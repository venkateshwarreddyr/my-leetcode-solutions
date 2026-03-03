// Problem: Furthest Point From Origin
// LeetCode: https://leetcode.com/problems/furthest-point-from-origin/
// Language: javascript
// Runtime: 80 ms
// Memory: 43.9 MB
// Submitted: 2023-08-27

/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let r =0
    let l =0
    let _ =0
    
    for(let c of moves){
        if(c ==="R")r++
        if(c ==="L")l++
        if(c ==="_")_++
    }
    
    return Math.abs(l-r)+_
};
