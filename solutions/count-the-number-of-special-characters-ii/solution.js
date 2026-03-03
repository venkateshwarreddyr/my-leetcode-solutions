// Problem: Count the Number of Special Characters II
// LeetCode: https://leetcode.com/problems/count-the-number-of-special-characters-ii/
// Language: javascript
// Runtime: 117 ms
// Memory: 59.9 MB
// Submitted: 2024-04-21

/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(s) {
    let occCap = new Array(26);
    let occSm = new Array(26);
    let lasOccSam = new Array(26);
    
    let i =0
    for(let c of s) {
        if(c === c.toLowerCase()) {
            let ind = c.charCodeAt(0) - 'a'.charCodeAt(0)
            occSm[ind] = i
           
        } else {
            let ind = c.charCodeAt(0) - 'A'.charCodeAt(0)
            if(occCap[ind] === undefined) {
                occCap[ind] = i
            }
        }
        
        
        i++
    }
    let cc = 0
    for(let i=0;i<26;i++) {
        if(occSm[i] < occCap[i]) {
            cc++
        }
    }
    
    return cc
};
