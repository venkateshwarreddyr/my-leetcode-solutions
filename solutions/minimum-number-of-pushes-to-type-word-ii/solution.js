// Problem: Minimum Number of Pushes to Type Word II
// LeetCode: https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/
// Language: javascript
// Runtime: 232 ms
// Memory: 61 MB
// Submitted: 2024-08-06

/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
        let freq = {}
    
    for(let c of word) {
        freq[c] = freq[c] || 0
        freq[c]++
    }
    
    let freqs = Object.entries(freq).sort((a, b) => b[1] - a[1])
    // console.log(freqs)
    
    let mul = 1
    let cc = 0
    let i =0 
    for(let [ch, chf] of freqs) {
        cc+=(chf * mul)
        i++
        if(i%8 === 0) mul++
    }
    
    return cc
};
