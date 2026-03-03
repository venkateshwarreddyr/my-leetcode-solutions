// Problem: Special Positions in a Binary Matrix
// LeetCode: https://leetcode.com/problems/special-positions-in-a-binary-matrix/
// Language: javascript
// Runtime: 63 ms
// Memory: 44.4 MB
// Submitted: 2023-07-16

var numSpecial = function (g) {
    let i,
        j,
        m = g.length,
        n = g[0].length,
        R1 = new Array(m).fill(1), // m that have only ones, assume all good(1)
        C1 = new Array(n).fill(1), // n that have only ones, assume all good(1)
        ones;

    for (i = 0, ones = 0; i < m; i++, ones = 0) {
        for (j = 0; j < n; j++) if (g[i][j] == 1) if (++ones > 1) break;
        if (ones == 0 || ones > 1) R1[i] = 0; // all zeros/ >1 ones = bad
    }

    for (j = 0, ones = 0; j < n; j++, ones = 0) {
        for (i = 0; i < m; i++) if (g[i][j] == 1) if (++ones > 1) break;
        if (ones == 0 || ones > 1) C1[j] = 0; // all zeros/ >1 ones = bad
    }

    let res = 0;
    for (i = 0; i < m; i++)
        for (j = 0; j < n; j++)
            if (g[i][j] == 1 && R1[i] == 1 && C1[j] == 1) res++;

    return res;
};
