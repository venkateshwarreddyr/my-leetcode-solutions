// Problem: Cells in a Range on an Excel Sheet
// LeetCode: https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/
// Language: javascript
// Runtime: 66 ms
// Memory: 45.8 MB
// Submitted: 2023-05-10

/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    let sc = s[0], ec = s[3], sr = s[1], er = s[4]
    let an = [];
    
    for(let i = sc.charCodeAt(0); i<=ec.charCodeAt(0);i++){
        for(let j=Number(sr); j<= Math.max(Number(sr), Number(er)); j++){
            an.push(String.fromCharCode(i)+j)
        }
    }
    
    return an;
};
