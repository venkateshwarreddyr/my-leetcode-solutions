// Problem: Count Prefix and Suffix Pairs I
// LeetCode: https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/
// Language: javascript
// Runtime: 55 ms
// Memory: 49.2 MB
// Submitted: 2024-02-18

/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let cc = 0
    let n = words.length
    
    for(let i=0;i<n;i++) {
        for(let j = i+1; j < n; j++) {
            if(words[j].startsWith(words[i]) && words[j].endsWith(words[i])) {
                cc++
            }
        }
    }
    
    return cc
};
