// Problem: Subarray With Elements Greater Than Varying Threshold
// LeetCode: https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/
// Language: javascript
// Runtime: 398 ms
// Memory: 117.6 MB
// Submitted: 2023-08-11

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
}

var validSubarraySize = function (a, threshold) {
  let n = a.length
  let uf = new UnionFind(n)
 
  let a_ei = new Array(n).fill().map((_, i) => [a[i], i])
  a_ei.sort((a, b) => b[0] - a[0])
  let s = new Set()
  for (let [e, i] of a_ei) {
    s.add(i)
    if (s.has(i - 1)) {
      uf.union(i - 1, i)
    }
    if (s.has(i + 1)) {
      uf.union(i, i + 1)
    }
    let size = uf.size(i)
    if (threshold < e * size) {
      return size
    }
  }
  return -1
};

/**
E(e) > t/size
size * E(e) > t
[1,3,4,3,1]
[0,1,2,3,4]

[1,1,3,3,4]
[0,4,3,4,2]


*/
