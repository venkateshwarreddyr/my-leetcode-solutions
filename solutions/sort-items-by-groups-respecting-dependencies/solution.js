// Problem: Sort Items by Groups Respecting Dependencies
// LeetCode: https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/
// Language: javascript
// Runtime: 353 ms
// Memory: 83.6 MB
// Submitted: 2023-08-21

const topologicalSort = (g, n) => {
  const queue = [];

  // indegree
  let indeg = new Array(n).fill(0)
  for (let u = 0; u < n; u++) {
    for (let v of g[u]) {
      indeg[v]++
    }
  }

  for (let u = 0; u < n; u++) {
    if (indeg[u] === 0) queue.push(u);
  }
  let an = [];
  while (queue.length) {
    let u = queue.shift();

    for (let v of g[u]) {
      indeg[v]--;
      if (indeg[v] === 0) {
        queue.push(v);
      }
    }
    indeg[u] = -1;
    an.push(u);
  }

  for (let u = 0; u < n; u++) {
    if (indeg[u] > 0) return [];
  }

  return an;
};

var sortItems = function (n, m, group, g) {
  let g1 = Array.from({ length: n }, () => new Array())
  for (let u = 0; u < n; u++) {
    for (let v of g[u]) {
      g1[v].push(u)
    }
  }

  for (let u = 0; u < n; u++) {
    g1[u] = [...new Set(g1[u])]
  }
  g = g1

  for (let u = 0; u < n; u++) {
    if (group[u] == -1) {
      group[u] = m++;
    }
  }

  let g2 = Array.from({ length: m }, () => new Array())
  for (let u = 0; u < n; u++) {
    ugroup = group[u]
    for (let v of g[u]) {
      let vgroup = group[v]
      if (ugroup === vgroup) continue
      g2[ugroup].push(vgroup)
    }
  }
  for (let u = 0; u < m; u++) {
    g2[u] = [...new Set(g2[u])]
  }

  let a = topologicalSort(g2, m)
  let b = topologicalSort(g1, n)
  if (a.length == 0 || b.length == 0) return [];

  let newg = Array.from({ length: m }, () => new Array())

  for (let e of b) newg[group[e]].push(e)

  let an = []
  for(let e of a){
    for(let e1 of newg[e]){
      an.push(e1)
    }
  }

  return an
};
