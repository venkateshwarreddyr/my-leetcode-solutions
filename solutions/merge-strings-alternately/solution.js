// Problem: Merge Strings Alternately
// LeetCode: https://leetcode.com/problems/merge-strings-alternately/
// Language: javascript
// Runtime: 62 ms
// Memory: 43.2 MB
// Submitted: 2023-05-10

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(w1, w2) {
    let nw = "";
    let i = 0;
    while(i<w1.length || i<w2.length){
        if(w1[i])
        nw+=(w1[i]);
        if(w2[i]){
           nw+=w2[i] 
        }
        i++;
    }
    
    return nw
};
