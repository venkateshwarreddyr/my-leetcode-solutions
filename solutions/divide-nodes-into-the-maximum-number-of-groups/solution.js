// Problem: Divide Nodes Into the Maximum Number of Groups
// LeetCode: https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/
// Language: javascript
// Runtime: 352 ms
// Memory: 63.7 MB
// Submitted: 2023-08-09

cl = console.log
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

var magnificentSets = function (n, edges) {
  let g = {}
  let uf = new UnionFind(n + 1)
  for (let i = 1; i < n + 1; i++) g[i] = []
  for (let [u, v] of edges) {
    g[u].push(v)
    g[v].push(u)
    uf.union(u, v)
  }

  let gp = {}
  for (let i = 1; i < n + 1; i++) {
    gp[uf.find(i)] = gp[uf.find(i)] || []
    gp[uf.find(i)].push(i)
  }

  let an = 0
  for (let p in gp) {
    let max = 0
    for (let u of gp[p]) {
      let val = bfs(u)
      cl({ u, max, val })
      if (val === -1) return -1
      max = Math.max(max, val)
    }

    an += max
  }

  function bfs(u) {
    let q = [u];
    let level = 0
    let levels = new Array(n + 1).fill(-1)
    levels[u] = 0;
    while (q.length) {
      for (let i = q.length; i > 0; i--) {
        let u = q.shift();
        for (let v of g[u]) {
          if (levels[v] === -1) {
            levels[v] = level + 1
            q.push(v);
          } else if (levels[v] === level) return -1
        }
      }
      level++
    }
    return level;
  }

  return an
};
