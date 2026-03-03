// Problem: Ransom Note
// LeetCode: https://leetcode.com/problems/ransom-note/
// Language: javascript
// Runtime: 105 ms
// Memory: 45.1 MB
// Submitted: 2022-01-31

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map1 = new Map();
    
    for(let rn of magazine){
        if(!map1.has(rn)) map1.set(rn, 1)
        else{
            map1.set(rn, map1.get(rn)+1)
        }
    }
    for(let r of ransomNote){
        if(map1.get(r)>0) map1.set(r, map1.get(r)-1)
        else{
            return false
        }
    }
    
    return true
};
