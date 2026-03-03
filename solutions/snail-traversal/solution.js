// Problem: Snail Traversal
// LeetCode: https://leetcode.com/problems/snail-traversal/
// Language: javascript
// Runtime: 199 ms
// Memory: 64.8 MB
// Submitted: 2023-12-13

cl = console.log
Array.prototype.snail = function (rowsCount, colsCount) {
    if (this.length !== rowsCount * colsCount) return []
    let k = 0
    let a = Array.from({ length: rowsCount }, () => new Array(colsCount));
    let flip = false
    for (let j = 0; j < colsCount; j++) {
        for (let i = 0; i < rowsCount; i++) {

            if (flip) {
                a[i][j] = this[k + rowsCount - i - 1]
            } else {
                a[i][j] = this[k]
                k++
            }

        }
        if (flip) {
            k += rowsCount
        }
        flip = !flip
    }

    return a
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
