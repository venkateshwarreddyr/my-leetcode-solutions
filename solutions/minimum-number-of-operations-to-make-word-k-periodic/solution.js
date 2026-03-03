// Problem: Minimum Number of Operations to Make Word K-Periodic
// LeetCode: https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/
// Language: javascript
// Runtime: 220 ms
// Memory: 67.8 MB
// Submitted: 2024-05-05

cl = console.log
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumOperationsToMakeKPeriodic = function(word, k) {
    let a = []
    let s = ''
    let i = 0
    for(let c of word) {
     
        s+=c
        i++
           if(i%k === 0) {
            a.push(s)
            s = ''
        }
    }
    cl(a)
    
    let ob = {}
    for(let w of a) {
        ob[w] = ob[w] || 0
        ob[w]++
    }
    
    return word.length/k - Math.max(...Object.values(ob))
};
