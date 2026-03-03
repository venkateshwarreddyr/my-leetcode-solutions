// Problem: Image Overlap
// LeetCode: https://leetcode.com/problems/image-overlap/
// Language: javascript
// Runtime: 83 ms
// Memory: 41.7 MB
// Submitted: 2023-08-18

cl = console.log

var largestOverlap = function (g1, g2) {
    let n = g1.length
    let maxcc = 0

    for (let g1starti = 0, g2starti = n - 1; g1starti < n && g2starti > -1; g2starti--) {
        for (let g1startj = n - 1, g2startj = 0; g1startj > -1 && g2startj < n; g1startj--) {
            let cc = 0
            for (let i1 = g1starti, i2 = g2starti; i1 < n && i2 < n; i1++, i2++) {
                for (let j1 = g1startj, j2 = g2startj; j1 < n && j2 < n; j1++, j2++) {
                    // cl({ i1, j1, i2, j2 })
                    if (g1[i1][j1] && g2[i2][j2]) {
                        cc++
                    }
                }
            }
            if (g1startj === 0) {
                g1startj++
                g2startj++
            }
            maxcc = Math.max(maxcc, cc)
        }
        if (g2starti === 0) {
            g2starti++
            g1starti++
        }
    }

    return maxcc;
};
