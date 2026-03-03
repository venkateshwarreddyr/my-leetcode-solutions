// Problem: Total Distance Traveled
// LeetCode: https://leetcode.com/problems/total-distance-traveled/
// Language: javascript
// Runtime: 150 ms
// Memory: 49.9 MB
// Submitted: 2023-06-18

cl = console.log
var distanceTraveled = function(mt, at) {
    let an = 0
    while(mt>=5){
        if(at>0){
            mt++
            at--
        }
        an+=(10*5);
        mt-=5;
    }
    
    an+=(10*mt)
    
    return an
};
