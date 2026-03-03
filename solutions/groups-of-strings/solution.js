// Problem: Groups of Strings
// LeetCode: https://leetcode.com/problems/groups-of-strings/
// Language: javascript
// Runtime: 859 ms
// Memory: 66.2 MB
// Submitted: 2023-08-12

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

  getRootCount() {
    let cc = 0
    for (let i = 0; i < this.o.length; i++) {
      if (this.find(i) === i) {
        cc++
      }
    }

    return cc
  }
}

function groupStrings(ws) {
  const n = ws.length
  const wbms = new Array(n).fill(0)
  const obm2i = {}
  const uf = new UnionFind(n)
  // ws[i]    ab
  // wbms[i]   11
  // obm2i [ wbms[i] ] = i
  // uf.union (i of same wbms[i] )
  for (let i = 0; i < n; i++) {
    // ws[i]  is word
    // wbms[i] is word's bitmask
    // w[i]   a    > 0000000000000000000000000000001  bitMasks[i]
    // w[i]   abc  > 0000000000000000000000000000111  bitMasks[i]
    wbms[i] = getBitmap(ws[i])
    // bm[i] to first i
    if (!(wbms[i] in obm2i)) {
      obm2i[wbms[i]] = i
    } else {
      uf.union(obm2i[wbms[i]], i)
    }
  }
  // adjs
  for (let i = 0; i < n; i++) {
    // wbms[i]
    // add/delete - adjs
    for (let b = 0; b < 26; b++) {
      const tempBm = toggleBit(wbms[i], b)
      if (tempBm in obm2i) {
        uf.union(i, obm2i[tempBm])
      }
    }
    // replace with any (remove current & add other) - adjs
    for (let b = 0; b < 26; b++) {
      if (isBitSet_(wbms[i], b)) {
        let tempBm = unsetBit_(wbms[i], b)
        for (let b2 = b + 1; b2 < 26; b2++) {
          if (!isBitSet_(wbms[i], b2)) {
            let tempBm2 = setBit___(tempBm, b2)
            if (tempBm2 in obm2i) {
              uf.union(i, obm2i[tempBm2])
            }
          }
        }
      }
    }
  }

  return [uf.getRootCount(), uf.getMax()]
}

const setBit___ = (a, j) => a | (1 << j) //   a[j] = 1
const unsetBit_ = (a, j) => a & ~(1 << j) //  a[j] = 0
const flipBit = toggleBit = (a, j) => a ^ (1 << j) //   a[j] = 1 - a[j]
const isBitSet_ = (a, j) => a & (1 << j) //   a[j] === 1 ?
function getBitmap(s) {
  // s = abcz (unique alphabets, order doesnot matter)
  let sbitmap = 0
  for (let ch of s) {
    let i = ch.charCodeAt(0) - 'a'.charCodeAt(0) // i = 0,1,2,25
    sbitmap = setBit___(sbitmap, i) // 0000010000000000000000000000111
  }
  return sbitmap
}

