// Problem: Separate Squares I
// LeetCode: https://leetcode.com/problems/separate-squares-i/
// Language: javascript
// Runtime: 132 ms
// Memory: 82.3 MB
// Submitted: 2026-01-13

function helper(line, squares) {
    let aAbove = 0, aBelow = 0;
    let n = squares.length;
    
    for (let i = 0; i < n; i++) {
        let x = squares[i][0], y = squares[i][1];
        let l = squares[i][2];
        let total = l * l;
        
        if (line <= y) {
            aAbove += total;
        } else if (line >= y + l) {
            aBelow += total;
        } else {
            let aboveHeight = (y + l) - line;
            let belowHeight = line - y;
            aAbove += l * aboveHeight;
            aBelow += l * belowHeight;
        }
    }
    
    return aAbove - aBelow;
}

var separateSquares = function(squares) {
    let lo = 0, hi = 2e9;
    
    for (let i = 0; i < 60; i++) {
        let mid = (lo + hi) / 2.0;
        let diff = helper(mid, squares);
        
        if (diff > 0) lo = mid;
        else hi = mid;
    }
    
    return hi;
};
