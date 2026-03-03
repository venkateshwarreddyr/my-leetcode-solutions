// Problem: Minimum Time to Revert Word to Initial State I
// LeetCode: https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/
// Language: javascript
// Runtime: 65 ms
// Memory: 51.6 MB
// Submitted: 2024-04-16

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumTimeToInitialState = function(s1, k) {
    let word = s1
    function compare(s2) {
        for(let i=0;i<s2.length;i++) {
            if(s1[i] !== s2[i]) return false
        }

        return true
    }
    let cc = 0
    while(word.length) {
        cc++
        word = word.slice(k)
        if(compare(word)) break
    }

    return cc
};
