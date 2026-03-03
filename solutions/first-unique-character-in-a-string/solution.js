// Problem: First Unique Character in a String
// LeetCode: https://leetcode.com/problems/first-unique-character-in-a-string/
// Language: javascript
// Runtime: 100 ms
// Memory: 44.9 MB
// Submitted: 2022-01-31

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(S) {
    let map1 = new Map();
    for(let s of S){
        map1.set(s, !map1.get(s) ? 1 : map1.get(s)+1)
    }
    for(let i=0;i<S.length;i++){
        if(map1.get(S[i])===1) return i 
    }
    return -1
};
