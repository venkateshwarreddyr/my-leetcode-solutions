// Problem: Collect Coins in a Tree
// LeetCode: https://leetcode.com/problems/collect-coins-in-a-tree/
// Language: javascript
// Runtime: 413 ms
// Memory: 108.1 MB
// Submitted: 2023-08-31

var collectTheCoins = function (coins, edges) {
  let n = coins.length
  let g = Array.from({ length: n }, () => new Set())
  let deg = new Array(n).fill(0)
  for (let [u, v] of edges) {
    g[u].add(v)
    g[v].add(u)
    deg[u]++
    deg[v]++
  }

  let queue = [];

  for (let u = 0; u < n; u++) {
    if (deg[u] === 1) queue.push(u);
  }
  while (queue.length) {
    let nqueue = []

    for (let u of queue) {
      if (coins[u]) continue
      for (let v of g[u]) {
        deg[v]--;
        g[u].delete(v)
        g[v].delete(u)
        if (deg[v] === 1) {
          nqueue.push(v);
        }
      }
    }

    queue = nqueue
  }

  for (let u = 0; u < n; u++) {
    if (deg[u] === 1) queue.push(u);
  }

  let c = 2
  while (c--) {
    let nqueue = []

    for (let u of queue) {
      for (let v of g[u]) {
        deg[v]--;
        g[u].delete(v)
        g[v].delete(u)
        if (deg[v] === 1) {
          nqueue.push(v);
        }
      }
    }

    queue = nqueue
  }

  let an = 0

  for (let e of g) {
    an += e.size
  }

  return an
};
/**

[
  Set(0) {}
  Set(0) {},
  Set(1) { 4 }
  Set(0) {},
  Set(2) { 2, 5 }, Set(1) { 4 },
  Set(0) {}
  Set(0) {},
  Set(0) {}
  Set(0) {},
  

 */
