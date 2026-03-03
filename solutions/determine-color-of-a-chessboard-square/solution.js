// Problem: Determine Color of a Chessboard Square
// LeetCode: https://leetcode.com/problems/determine-color-of-a-chessboard-square/
// Language: javascript
// Runtime: 76 ms
// Memory: 38.9 MB
// Submitted: 2021-09-07

/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(co) {
    x = co.charCodeAt(0)+1-'a'.charCodeAt(0);
    y = Number(co[1]);
    return (x+y)&1
};

var squareIsWhite1 = function(co) {
    x = co.charCodeAt(0)+1-'a'.charCodeAt(0);
    y = Number(co[1]);
    // if(x===y) return false;
    // if((x&1 && y&1) || (x&1 && !y&1))
    // return false;
    // return true;
    if(x&1){
        if(y&1) return false
         return true
    }
    else{
        if(y&1) return true
         return false
    }
};

