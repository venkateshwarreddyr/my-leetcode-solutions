// Problem: Rotating the Box
// LeetCode: https://leetcode.com/problems/rotating-the-box/
// Language: javascript
// Runtime: 1038 ms
// Memory: 85.7 MB
// Submitted: 2023-07-16

var rotateTheBox = function (g) {
    const m = g.length;
    const n = g[0].length;
    const g2 = Array.from({ length: n }, (_) => new Array(m).fill("."));

    // move # to right if there is . on right
    for (let r = 0; r < m; r++) {
        let row = g[r];

        for (let j = row.length - 2; j >= 0; j--) {
            let k = j;
            while (k < row.length - 1) {
                if (row[k] === "#" && row[k + 1] === ".") {
                    row[k] = ".";
                    row[k + 1] = "#";
                }
                k++;
            }
        }
    }

    // transpose 90 to right
    let c = m - 1;
    for (let r = 0; r < m; r++) {
        let row = g[r];
        let r1 = 0;
        for (let e of row) {
            g2[r1++][c] = e;
        }
        c--;
    }

    return g2;
};
