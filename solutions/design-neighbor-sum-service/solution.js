// Problem: Design Neighbor Sum Service
// LeetCode: https://leetcode.com/problems/design-neighbor-sum-service/
// Language: javascript
// Runtime: 18 ms
// Memory: 66.5 MB
// Submitted: 2025-07-26

class NeighborSum {
    constructor(g) {
        this.g = g;
        this.n = g.length;

        this.adjSum = new Array(this.n * this.n);
        this.diaSum = new Array(this.n * this.n);

        for (let i = 0; i < this.n; i++)
            for (let j = 0; j < this.n; j++) {
                this.adjSum[g[i][j]] =
                    0 +
                    (g[i]?.[j - 1] ?? 0) + // l
                    (g[i]?.[j + 1] ?? 0) + // i
                    (g[i - 1]?.[j] ?? 0) + // t
                    (g[i + 1]?.[j] ?? 0); // b
                this.diaSum[g[i][j]] =
                    0 +
                    (g[i - 1]?.[j - 1] ?? 0) + // tl
                    (g[i - 1]?.[j + 1] ?? 0) + // tr
                    (g[i + 1]?.[j - 1] ?? 0) + // bl
                    (g[i + 1]?.[j + 1] ?? 0); // br
            }
    }
    adjacentSum(x) {
        return this.adjSum[x]
    }
    diagonalSum(x) {
        return this.diaSum[x]
    }
}
