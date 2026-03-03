// Problem: Minimum Deletions to Make Character Frequencies Unique
// LeetCode: https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
// Language: javascript
// Runtime: 137 ms
// Memory: 48.6 MB
// Submitted: 2023-09-12

/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let obj = {}
    for(let c of s){
        obj[c] = (obj[c] || 0) + 1
    }
    let arr = Object.values(obj).sort((a,b) => a-b)
    let counter = 0;
    for(let i=0;i<arr.length;i++){
        while(arr.filter(e => e===arr[i] && e > 0).length>1){
            arr[i]--
            counter++
        }
    }
    
    return counter;
};
