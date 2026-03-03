// Problem: GCD Sort of an Array
// LeetCode: https://leetcode.com/problems/gcd-sort-of-an-array/
// Language: javascript
// Runtime: 1065 ms
// Memory: 169.1 MB
// Submitted: 2023-08-07

cl = console.log
class UnionFindOb {
    constructor(A) {
        this.o = {};
        this.osize = {};
        for (let i = 0; i < A.length; i++) {
            let e = A[i];
            this.o[e] = e;
            this.osize[e] = 1;
        }
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

    getRoots() {
        let set = new Set();
        for (let key of Object.keys(this.o)) {
            set.add(this.find(key));
        }

        return [...set];
    }
}


var gcdSort = function (a) {
    // a.sort((a, b) => a - b)
    const gcd = (a, b) => (a ? gcd(b % a, a) : b);
    let n = a.length
    let b = [...a].sort((a, b) => a - b)
    let uf = new UnionFindOb(new Array(Math.max(...a)).fill().map((e, i) => i+1))

    for (let e of a) {
        let orie = e
        for (let f = 2; f <= Math.sqrt(e); f++) {
            if (e % f === 0) {
                uf.union(orie, f)
                while (e % f === 0) {
                    e /= f
                }
            }
        }

        if (e > 1) {
            uf.union(orie, e)
        }
    }

    let i = 0
    for (let e of a) {
        if (uf.find(e) !== uf.find(b[i])) return false
        i++
    }
    uf.print()
    cl(a)
    cl(b)
    return true

    // for (let i)
};

/**
[10,3,9,6,8]
[3,9,6,8,10]


{ '3': 3, '5': 5, '9': 9, '10': 10, '15': 15 }
{ '3': 1, '5': 1, '9': 1, '10': 1, '15': 1 }
Set(5) { 10, 5, 9, 3, 15 } 5 10
Set(5) { 10, 5, 9, 3, 15 } 3 9
Set(5) { 10, 5, 9, 3, 15 } 3 15
{
  '2': undefined,
  '3': 15,
  '5': undefined,
  '9': 3,
  '10': 5,
  '15': undefined
}
{ '3': 2, '5': 2, '9': 1, '10': 1, '15': 3, undefined: NaN }

 */
