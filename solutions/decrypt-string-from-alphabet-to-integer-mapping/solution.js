// Problem: Decrypt String from Alphabet to Integer Mapping
// LeetCode: https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
// Language: javascript
// Runtime: 66 ms
// Memory: 44.2 MB
// Submitted: 2023-05-10

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(ss) {
    ss = ss.split("");
    let an = "";
    
    while(ss.length){
        let [f,s,t] = ss;
        if(t === "#"){
            an+=String.fromCharCode(Number(f+s)+96)
            ss.splice(0, 3)
        } else {
            an+=String.fromCharCode(Number(f)+96)
            ss.splice(0, 1)
        }
    }
    
    return an;
};
