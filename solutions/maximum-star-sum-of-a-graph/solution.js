// Problem: Maximum Star Sum of a Graph
// LeetCode: https://leetcode.com/problems/maximum-star-sum-of-a-graph/
// Language: javascript
// Runtime: 335 ms
// Memory: 115.8 MB
// Submitted: 2023-06-23

/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStarSum = function (vals, edges, k) {
  let cl = console.log

  let n = vals.length
  let ad = Array.from({ length: n }, () => []);
  let max = -Infinity;

  for (let [u, v] of edges) {
    ad[u].push(v);
    ad[v].push(u);
  }

  for (let u = 0; u < n; u++) {
    let pq = new MaxPriorityQueue((item) => item)
    for (let v of ad[u]) {
      pq.enqueue(vals[v])
    }
    let s = vals[u]

    for (let i = 0; i < k && !pq.isEmpty(); i++) {
      let { element } = pq.dequeue()
      if (element <= 0) break;
      s += element
    }

    max = Math.max(s, max);
  }

  return max;

};

