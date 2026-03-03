// Problem: Determine Whether Matrix Can Be Obtained By Rotation
// LeetCode: https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/
// Language: javascript
// Runtime: 52 ms
// Memory: 44.6 MB
// Submitted: 2023-07-16

class Matrix {
    g;
    m;
    n;

    constructor(g) {
        if (g) this.set(g);
    }
    set(g) {
        this.g = g;
        this.m = g.length;
        this.n = g[0].length;
    }

    rotateRight90_rimRotate_array() {
        let { g, m, n } = this;

        function rotateRight90_theRimAt(r, c) {
            let left = [];
            for (let rr = m - 1 - r; rr >= r; rr--) left.push(g[rr][c]);
            let top = g[r].slice(c, n - c);
            let right = [];
            for (let rr = r; rr <= m - 1 - r; rr++) right.push(g[rr][n - 1 - c]);
            let bottom = g[m - 1 - r].slice(c, n - c).reverse();

            for (let cc = c, i = 0; cc <= n - 1 - c; cc++) g[r][cc] = left[i++];
            for (let rr = r, i = 0; rr <= m - 1 - r; rr++) g[rr][n - 1 - c] = top[i++];
            for (let cc = n - 1 - c, i = 0; cc >= c; cc--) g[m - 1 - r][cc] = right[i++];
            for (let rr = m - 1 - r, i = 0; rr >= r; rr--) g[rr][c] = bottom[i++];
        }

        // rotate ALL RIMS (outer to inner)) until reaching mid of rect
        let mhalf = Math.trunc(m / 2);
        let nhalf = Math.trunc(n / 2);
        for (let r = 0, c = 0; r <= mhalf && c <= nhalf; r++, c++) {
            rotateRight90_theRimAt(r, c);
        }
    }
    findRotationOfMisN(N) {
        let { g } = this;

        if (JSON.stringify(g) === JSON.stringify(N)) return true; // initial

        for (let turns = 1; turns <= 3; turns++) {
            this.rotateRight90_rimRotate_array();
            if (JSON.stringify(g) === JSON.stringify(N)) return true; // after 3 rotates
        }

        return false;
    }
}

var findRotation = function (g, N) {
    let m = new Matrix(g);
    return m.findRotationOfMisN(N);
};
