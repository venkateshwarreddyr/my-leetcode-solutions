// Problem: Relocate Marbles
// LeetCode: https://leetcode.com/problems/relocate-marbles/
// Language: javascript
// Runtime: 312 ms
// Memory: 74.8 MB
// Submitted: 2023-07-08

cl = console.log

var relocateMarbles = function(a, moveFrom, moveTo) {
    let newA = {
        
    }
    
     for(let e of a){
         newA[e] = 1
     }
    
    for(let i=0;i<moveFrom.length;i++){
        if(moveTo[i] !== moveFrom[i]){
        newA[moveTo[i]] = 1
        delete newA[moveFrom[i]]
        }
    }
   
    return Object.keys(newA).map(e => +e).sort((a,b) => a - b);
};
