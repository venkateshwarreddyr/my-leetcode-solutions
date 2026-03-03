// Problem: Process Restricted Friend Requests
// LeetCode: https://leetcode.com/problems/process-restricted-friend-requests/
// Language: javascript
// Runtime: 269 ms
// Memory: 60.5 MB
// Submitted: 2023-08-04

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

    clone() {
        let ret = new UnionFind()
        ret.o = [...this.o]
        ret.osize = [...this.osize]

        return ret
    }

    print() {
        let cl = console.log;
        cl(this.o);
        cl(this.osize);
    }
}

var friendRequests = function (N, restrictions, requests) {
    let ans = []

    let friends = new UnionFind(N)
    for (let [u, v] of requests) {
        let cloned = friends.clone()
        friends.union(u, v)
        if (check()) ans.push(true)
        else {
            ans.push(false)
            friends = cloned
        }
    }
    return ans

    function check() {
        for (let [u, v] of restrictions) {
            if (friends.find(u) === friends.find(v)) return false
        }
        return true
    }
}
