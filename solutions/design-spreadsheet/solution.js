// Problem: Design Spreadsheet
// LeetCode: https://leetcode.com/problems/design-spreadsheet/
// Language: javascript
// Runtime: 80 ms
// Memory: 74.1 MB
// Submitted: 2025-10-28

class Spreadsheet {
    o = {}
    constructor(rows) {
    }
    setCell(cell, value) {
        const { o } = this
        o[cell] = value
    };
    resetCell(cell) {
        const { o } = this
        o[cell] = 0
    };
    getValue(formula) {
        // =?+?   a1+a1   a1+1
        const { o } = this
        let abArray = formula.slice(1).split('+')
        let sum = 0
        for (let a of abArray) {
            sum += Number.isInteger(+a) ? +a : (o[a] ?? 0)
        }
        return sum
    };
};

/** 
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */

