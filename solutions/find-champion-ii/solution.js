// Problem: Find Champion II
// LeetCode: https://leetcode.com/problems/find-champion-ii/
// Language: javascript
// Runtime: 91 ms
// Memory: 51.4 MB
// Submitted: 2023-11-05

cl = console.log
const topologicalSor11t = (g, indeg) => {
  let n = indeg.length;
  let queue = [];
 let gset = new Set()
    let last = 0
  for (let u = 0; u < n; u++) {
    if (indeg[u] === 0){
          gset.add(u)
          last = gset.size
         queue.push(u);
    }
  }

  let an = [];
   
 
    while(queue.length){
          gset = new Set()
        let nqueue = []
      for(let u of queue){
      
        for (let v of g[u]) {
          indeg[v]--;
          if (indeg[v] === 0) {
              gset.add(v)
              last = gset.size
            nqueue.push(v);
          }
        }
        indeg[u] = -1;
        an.push(u);
      }
        queue = nqueue
    }

    cl(gset)
 an.pop()

};
const topologicalSort = (g, indeg) => {
  let n = indeg.length;
  const queue = [];

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

  // for (let u = 0; u < n; u++) {
  //   if (indeg[u] > 0) return [];
  // }

  return an[an.length-1];
};

var findChampion = function(n, edges) {
    let g = Array.from({ length: n }, () => []);
    let indegree = Array.from({ length: n }, () => 0);
    let outdegree = Array.from({ length: n }, () => 0);

    for (let [u, v] of edges) {
      g[v].push(u);
      outdegree[v]++;
      indegree[u]++;
    }
    
    let cc = 0
    for(let u =0; u<n;u++){
        if(outdegree[u] === 0) cc++
    }
    
    if(cc !== 1) return -1
    
    return topologicalSort(g, outdegree)
};
