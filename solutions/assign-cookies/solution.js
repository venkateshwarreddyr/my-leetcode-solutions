// Problem: Assign Cookies
// LeetCode: https://leetcode.com/problems/assign-cookies/
// Language: javascript
// Runtime: 106 ms
// Memory: 44.7 MB
// Submitted: 2024-01-01

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = g.sort((a,b) => a>b?1:-1);
    s = s.sort((a,b) => a>b?1:-1);
    let counter = 0
    for(let i = 0, j = 0;i<g.length&&j<s.length;j++){
        if(s[j] >= g[i]){
            counter++
            i++;
        }
       
    }
    return counter
};
