// Problem: Redundant Connection II
// LeetCode: https://leetcode.com/problems/redundant-connection-ii/
// Language: javascript
// Runtime: 73 ms
// Memory: 46.2 MB
// Submitted: 2023-08-03

cl = console.log
class UnionFind {
  constructor(n, obj = { start: 0, end: n }) {
    this.n = n
    if (obj) {
      let { start, end } = obj
      this.o = {}
      this.osize = {}
      for (let i = start; i < end; i++) {
        this.o[i] = i
        this.osize[i] = 1
      }
    } else {
      this.o = Array.from({ length: n }, (_, i) => i);
      this.osize = new Array(n).fill(1);
    }
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
  getRootCount(start = 0) {
    let cc = 0
    for (let i = start; i < this.n; i++) {
      if (i === this.find(i)) cc++
    }
    return cc
  }
}


var findRedundantDirectedConnection = function (edges) {
  let n = edges.length
  let indeg = new Array(n + 1).fill(0)

  for (let [u, v] of edges) {
    if (indeg[v]) {
      indeg[v]++
    } else {
      indeg[v]++
    }
  }
  let uf = new UnionFind(n + 1)
  if (!indeg.includes(2)) {
    for (let [u, v] of edges) {
      if (!uf.union(u, v)) return [u, v]
    }
  }
  let first = null
  let second = null
  for (let [u, v] of edges) {
    if (indeg)
      if (indeg[v] === 2) {
        if (!first) {
          uf.union(u, v)
          first = [u, v]
        } else {
          second = [u, v]
        }
      } else {
        uf.union(u, v)
      }
  }

  if (uf.getRootCount() === 2) return second
  return first

};
/**

[[2,1],[3,1],[4,2],[1,4]]

4 ----> 2 ---> 1 <--- 3
  ^\----------/

 */
