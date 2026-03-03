// Problem: Excel Sheet Column Number
// LeetCode: https://leetcode.com/problems/excel-sheet-column-number/
// Language: javascript
// Runtime: 84 ms
// Memory: 40.5 MB
// Submitted: 2021-08-05

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(S) {
    let ans = 0;
    // let C = c.split('')
    S = S.split("").reverse().join("");
    for(let i=0; i<S.length; i++){
        ans+=((S.charCodeAt(i)-"A".charCodeAt(0)+1)*Math.pow(26, i));
    }
    return ans;
};
