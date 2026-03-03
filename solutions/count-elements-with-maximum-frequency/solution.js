// Problem: Count Elements With Maximum Frequency
// LeetCode: https://leetcode.com/problems/count-elements-with-maximum-frequency/
// Language: javascript
// Runtime: 59 ms
// Memory: 51.7 MB
// Submitted: 2024-04-08

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(a) {
    let ob = {}

    for(let e of a) {
        ob[e] = ob[e] || 0
        ob[e]++
    }

    let max = Math.max(...Object.values(ob));

    let cc = 0
    for(let e of Object.values(ob)) {
        if(e === max) cc++
    }


    return cc*max
};
