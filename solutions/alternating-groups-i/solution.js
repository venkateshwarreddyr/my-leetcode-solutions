// Problem: Alternating Groups I
// LeetCode: https://leetcode.com/problems/alternating-groups-i/
// Language: javascript
// Runtime: 66 ms
// Memory: 51.4 MB
// Submitted: 2024-08-21

/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors) {
    let n = colors.length
    let cc = 0
    for(let i=0; i<n; i++) {
        if(colors[i] !== colors[(i+1) % n] && colors[i] !== colors[(i-1+n)%n]) {
            cc++
        }
    }


    return cc
};
