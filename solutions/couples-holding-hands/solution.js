// Problem: Couples Holding Hands
// LeetCode: https://leetcode.com/problems/couples-holding-hands/
// Language: javascript
// Runtime: 40 ms
// Memory: 41.5 MB
// Submitted: 2023-08-03

class UnionFind {
  constructor(n) {
    this.o = Array.from({ length: n }, (_, i) => i);
    this.osize = new Array(n).fill(1);
  }

  build(edges) {
    for (let [x, u, v] of edges) {
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
}


var minSwapsCouples = function (a) {
  let n = a.length / 2
  for (let i = 0; i < a.length; i++) {
    a[i] = Math.floor(a[i] / 2)
  }

  let cc = 0
  let uf = new UnionFind(n)
  for (let i = 0; i < a.length; i = i + 2) {
    if (a[i] !== a[i + 1]) {
      if (uf.union(a[i], a[i + 1])) {
        cc++;
      }
    }
  }

  return cc;

};
