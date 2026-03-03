// Problem: Minimum Right Shifts to Sort the Array
// LeetCode: https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/
// Language: javascript
// Runtime: 11 ms
// Memory: 61.5 MB
// Submitted: 2025-10-12

var minimumRightShifts = function (a) {
    let n = a.length
    let aSortedStr = [...a].sort((a, b) => a - b).toString()

    if (a.toString() === aSortedStr) return 0

    for (let count = 1; count <= n; count++) {
        let aRightShifted = []
        for (let i = 0; i < n; i++) {
            aRightShifted[(i + 1) % n] = a[i]
        }
        if (aRightShifted.toString() === aSortedStr) return count
        a = aRightShifted
    }

    return -1
}

