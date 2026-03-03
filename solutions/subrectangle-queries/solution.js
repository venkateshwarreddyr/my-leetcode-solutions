// Problem: Subrectangle Queries
// LeetCode: https://leetcode.com/problems/subrectangle-queries/
// Language: javascript
// Runtime: 81 ms
// Memory: 47.6 MB
// Submitted: 2023-07-15

/**
 * @param {number[][]} rectangle
 */
var SubrectangleQueries = function (rectangle) {
    r = rectangle
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2 
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function (row1, col1, row2, col2, newValue) {
    for (let i = row1; i <= row2; i++) {
        for (let j = col1; j <= col2; j++) {
            r[i][j] = newValue
        }
    }
};

/** 
 * @param {number} row 
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function (row, col) {
    return r[row][col]
};

/** 
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */
