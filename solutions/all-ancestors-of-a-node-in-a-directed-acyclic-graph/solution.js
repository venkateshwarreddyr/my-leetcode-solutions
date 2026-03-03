// Problem: All Ancestors of a Node in a Directed Acyclic Graph
// LeetCode: https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/
// Language: javascript
// Runtime: 518 ms
// Memory: 131.5 MB
// Submitted: 2023-06-22

var getAncestors = function (n, edges) {
  cl = console.log

  let adjs = Array.from({ length: n }, () => new Array())
  let radjs = Array.from({ length: n }, () => new Array())
  let ances = Array.from({ length: n }, () => new Set())
  // let ind = Array.from({ length: n }).fill(0)

  for (let [u, v] of edges) {
    adjs[u].push(v)
    radjs[v].push(u)
    ances[v].add(u)

    // ind[v]++
  }

  let maxlvl = Array.from({ length: n }).fill(-1)
  function dfs(u, lvl) {
    if (lvl > maxlvl[u]) {
      maxlvl[u] = lvl
    } else {
      return
    }
    for (let v of adjs[u]) {
      dfs(v, lvl + 1)
    }
  }
  for (let u = 0; u < n; u++) {
    dfs(u, 0)
  }
  // cl(maxlvl)
  maxlvl = maxlvl.map((cc, u) => [u, cc]).sort((a, b) => a[1] - b[1])


  for (let [u, cc] of maxlvl) {
    // for (let u = 0; u < n; u++) {
    for (let v of radjs[u]) {
      ances[u].add(v)
      for (let e of ances[v]) {
        ances[u].add(e)
      }
    }
    // }
  }

  return ances.map(set => [...set].sort((a, b) => a - b))




  /*
  
    // degree
    let ind = Array.from({ length: n }).fill(0)
    let outd = Array.from({ length: n }).fill(0)
    for (let u = 0; u < n; u++) {
      for (let v of radjs[u]) {
        outd[u]++
        ind[v]++
      }
    }
  
    let sources = []
    for (let u = 0; u < n; u++) {
      if (ind[u] === 0) {
        sources.push(u)
      }
    }
  
  
    let ances = Array.from({ length: n }, () => new Array())
  
    function bfs(sources) {
      let q = []
      q.push(...sources)
  
      while (q.length) {
        let u = q.shift()
        for (let v of radjs[u]) {
          q.push(v)
          ances[v].push(u)
          ances[v].push(ances[u])
        }
        // cl(q)
      }
  
      // return setvis.size
    }
  
    bfs(sources)
    return ances.map(arr => [... new Set(arr.flat())].sort((a, b) => a - b))
  
  
  
  
  
  
    let an = Array.from({ length: n }, () => []);
  
    let vis = new Set()
    function dfs(u) {
      if (!vis.has(u)) {
        vis.add(u)
        for (let v of radjs[u]) {
          an[v].push(u)
          dfs(v)
        }
      }
    }
  
    for (let s = 0; s < n; s++) {
      if (!vis.has(s))
        dfs(s)
    }
  
    for (let s = 0; s < n; s++) {
      an.forEach((e, i) => {
        for (let v of e) {
          an[i] = [...new Set(an[i].concat([...an[v]]))]
        }
      })
    }
    cl(an)
    return an.map(e => [...e].sort((a, b) => a - b))
  
  */
};
