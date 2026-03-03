// Problem: Minimum Cost to Move Chips to The Same Position
// LeetCode: https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/
// Language: javascript
// Runtime: 57 ms
// Memory: 42 MB
// Submitted: 2023-05-12

var minCostToMoveChips = function(pos) {
    let n = pos.length
    let evens = 0;
    let odds = 0;
    for(let p of pos){
        if((p)%2 === 0){
            evens++
        } else {
            odds++
        }
    }

    return Math.min(evens, odds)
};
var minCostToMoveChips1 = function(pos) {
    
    let obj = new Map()
    for(let x of pos){
        if(!obj.has(x)){
            obj.set(x, 0)
        }
        obj.set(x, obj.get(x)+1)
    }

    let evens = 0;
    let odds = 0;
    for(let [key, value] of obj){
        if((key)%2 === 0){
            evens+=value
        } else {
            odds+=value
        }
    }

    return Math.min(evens, odds)
};
