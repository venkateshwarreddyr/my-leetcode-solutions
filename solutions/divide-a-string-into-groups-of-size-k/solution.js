// Problem: Divide a String Into Groups of Size k
// LeetCode: https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/
// Language: javascript
// Runtime: 125 ms
// Memory: 39.6 MB
// Submitted: 2022-01-16

/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let arr = []
    while(s.length%k!=0){
        s=s+fill
    }
    for(let i=0;i<s.length;i+=k){
        arr.push(s.slice(i,i+k))
    }
    
    return arr
};
