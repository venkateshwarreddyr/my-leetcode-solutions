// Problem: Count Asterisks
// LeetCode: https://leetcode.com/problems/count-asterisks/
// Language: javascript
// Runtime: 69 ms
// Memory: 42.3 MB
// Submitted: 2023-05-10

/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    s = s.split("|")
    n = s.length;
    let an = 0;
    
    for(let i = 0;i<n;i+=2){
       for (let j = 0; j < s[i].length; j++) {
            if (s[i][j] === '*') {
                an++;
            }
        }
    }
    
    return an;
};
