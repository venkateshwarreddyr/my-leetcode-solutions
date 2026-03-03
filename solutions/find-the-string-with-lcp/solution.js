// Problem: Find the String with LCP
// LeetCode: https://leetcode.com/problems/find-the-string-with-lcp/
// Language: javascript
// Runtime: 147 ms
// Memory: 75.6 MB
// Submitted: 2023-08-14

class UnionFind {
    constructor(n) {
        this.o = Array.from({ length: n }, (_, i) => i);
        this.osize = new Array(n).fill(1);
    }

    build(edges) {
        for (let [u, v] of edges) {
            union(u, v);
        }
    }

    union(u, v) {
        u = this.find(u);
        v = this.find(v);

        if (u === v) return 0;

        if (this.osize[u] < this.osize[v]) {
            [u, v] = [v, u];
        } else if (this.osize[u] === this.osize[v] && u < v) {
            [u, v] = [v, u];
        }
        this.o[u] = v;
        this.osize[v] += this.osize[u];

        return 1;
    }

    find(u) {
        if (u !== this.o[u]) {
            this.o[u] = this.find(this.o[u]);
        }

        return this.o[u];
    }

    findVal(u) {
        return this.osize[this.find(u)];
    }

    getMax() {
        return Math.max(...Object.values(this.osize));
    }

    print() {
        let cl = console.log;
        cl(this.o);
        cl(this.osize);
    }

    clone() {
        let ret = new UnionFind();
        ret.o = [...this.o];
        ret.osize = [...this.osize];

        return ret;
    }

    size(x) {
        return this.osize[this.find(x)];
    }

    getRootCount() {
        let cc = 0;
        for (let i = 0; i < this.o.length; i++) {
            if (this.find(i) === i) {
                cc++;
            }
        }

        return cc;
    }
}

function findTheString(matrix) {
    const n = matrix.length;
    let uf = new UnionFind(n)

    const components = new Array(n);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (matrix[i][j] > 0) {
                uf.union(i, j);
            }
        }
    }

    const map = {};
    let currentChar = 'a';
    for (let i = 0; i < n; i++) {
        const root = uf.find(i);
        if (!map[root]) {
            map[root] = currentChar;
            currentChar = String.fromCharCode(currentChar.charCodeAt(0) + 1);
        }
        if (map[root] > 'z') {
            return '';
        }
        components[i] = map[root];
    }
    const commonSubstrings = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        commonSubstrings[i] = new Array(n + 1).fill(0);
    }
    for (let i = n - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (components[i] === components[j]) {
                commonSubstrings[i][j] = 1 + commonSubstrings[i + 1][j + 1];
            }
            if (commonSubstrings[i][j] !== matrix[i][j]) {
                return '';
            }
        }
    }

    return components.join('');
}
