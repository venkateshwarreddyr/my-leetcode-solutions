// Problem: Longest Unequal Adjacent Groups Subsequence I
// LeetCode: https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/
// Language: javascript
// Runtime: 68 ms
// Memory: 44.4 MB
// Submitted: 2023-10-14

/**
 * @param {number} n
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function(n, words, groups) {
    
    let an = []
    function fn(i, a){
        if( i === n){
            if(an.length < a.length){
                an = [...a]
            }
            return
        }
        if(a.length){
            if(groups[i] !== groups[a[a.length-1]]){
                a.push(i)
                fn(i+1, a)
            } else {
                 fn(i+1, a)
            }
        } else {
            a.push(i)
            fn(i+1, a)
        }
    }
    
    fn(0, [])
    
    return an.map(e => words[e])
};
