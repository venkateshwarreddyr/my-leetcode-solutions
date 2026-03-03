// Problem: Connecting Cities With Minimum Cost
// LeetCode: https://leetcode.com/problems/connecting-cities-with-minimum-cost/
// Language: javascript
// Runtime: 134 ms
// Memory: 60.2 MB
// Submitted: 2024-04-27

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(n, connections) {
    connections.sort((a, b) => a[2] - b[2]);

    uf = new UnionFind(n + 1);
    let an = 0

    for(let [u, v, w] of connections) {
        if(uf.find(u) !== uf.find(v)) {
            an+=w
            uf.union(u, v)
        }
    }

    console.log(uf.o)
    return uf.getRootCount() > 2 ? -1 : an

};


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

