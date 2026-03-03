// Problem: Minimum Swaps to Arrange a Binary Grid
// LeetCode: https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/
// Language: javascript
// Runtime: 71 ms
// Memory: 47.2 MB
// Submitted: 2023-08-25

// cl = console.log
var minSwaps = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let a = new Array(m).fill(0)
    for (let i = 0; i < m; i++) {
        let zerocc = 0
        for (let j = n - 1; j > -1; j--) {
            if (grid[i][j] === 0) {
                zerocc++
            } else {
                a[i] = zerocc
                break
            }

            if (j === 0) {
                a[i] = zerocc
            }
        }
    }
    // cl(a)
    let cc = 0
    for (let i = 0; i < m; i++) {
        if (a[i] >= m - 1 - i) continue
        // cl(a, "st")
        MM:
        for (let j = i + 1; j < m; j++) {
            // cl(i, a[j], m - i - 1)
            if (a[j] >= m - i - 1) {
                cc += (j - i)
                while (j !== i) {
                    [a[j], a[j - 1]] = [a[j - 1], a[j]]
                    j--
                }

                break MM;
            }
        }
    }
    let st = 0
    for (let i = m - 1; i > -1; i--) {
        if (a[i] >= st) st++
        else return -1
    }

    return cc
};
