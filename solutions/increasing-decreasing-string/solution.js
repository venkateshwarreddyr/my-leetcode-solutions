// Problem: Increasing Decreasing String
// LeetCode: https://leetcode.com/problems/increasing-decreasing-string/
// Language: javascript
// Runtime: 81 ms
// Memory: 47.7 MB
// Submitted: 2023-05-10

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let ob = {}
    let an = ""
    for(let c of s){
        ob[c] = (ob[c] || 0) + 1
    }
    
    let keys = Object.keys(ob).sort();
    
    let dir = 1
    while(Object.keys(ob).length){
        for(let key of keys){
            if(ob[key]){
               an+=key
                ob[key]--
            } else {
                delete ob[key]
            }
        }
        keys.reverse()
    
    }
    
    return an;
};
