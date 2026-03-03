// Problem: Cyclically Rotating a Grid
// LeetCode: https://leetcode.com/problems/cyclically-rotating-a-grid/
// Language: javascript
// Runtime: 108 ms
// Memory: 46.2 MB
// Submitted: 2023-07-17

var rotateGrid = function (g, k) {

    const rotateLeft = (g, istart, jstart) => {
        let m = g.length
        let n = g[0].length

        m -= istart;
        n -= jstart;

        let i, j;
        let topLeft = g[istart][jstart];

        for (i = istart, j = jstart + 1; j < n; j++) g[i][j - 1] = g[i][j] // move top
        for (j = n - 1, i = istart + 1; i < m; i++) g[i - 1][j] = g[i][j] // move right
        for (i = m - 1, j = n - 1; j > jstart; j--) g[i][j] = g[i][j - 1] // move bottom
        for (j = jstart, i = m - 1; i > istart; i--) g[i][j] = g[i - 1][j] // move left

        g[istart + 1][jstart] = topLeft // place the top left just below its prev place
    }

    let m = g.length
    let n = g[0].length

    for (let i = 0, j = 0; i < m / 2 && j < n / 2; i++, j++) {

        let length = g.length - 1 //     -1 was missing
        let bredth = g[i].length - 1 //  -1 was missing in competition, yielded a bad rank

        length -= (2 * i);
        bredth -= (2 * j);

        var perimeter = k % (2 * (length + bredth));

        for (let kk = 0; kk < perimeter; kk++)
            rotateLeft(g, i, j)
    }

    return g;
};
