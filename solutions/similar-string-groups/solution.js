// Problem: Similar String Groups
// LeetCode: https://leetcode.com/problems/similar-string-groups/
// Language: javascript
// Runtime: 220 ms
// Memory: 45.5 MB
// Submitted: 2023-08-04


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
        let set = new Set()
        for (let key of Object.keys(this.o)) {
            set.add(this.find(key))
        }

        return [...set]
    }
}

var numSimilarGroups = function (strs) {
    let uf = new UnionFindOb(strs)
    OO:
    for (let i = 0; i < strs.length; i++) {
        let str1 = strs[i]
        for (let j = i + 1; j < strs.length; j++) {
            let str2 = strs[j]
            if (uf.find(str1) === uf.find(str2)) continue
            let cc = 0
            for (let k = 0; k < str2.length; k++) {
                if (str2[k] !== str1[k]) cc++
            }
            if (cc <= 2) {
                uf.union(str1, str2)
            }
        }
    }

    return uf.getRoots().length
};
