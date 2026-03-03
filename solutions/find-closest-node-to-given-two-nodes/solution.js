// Problem: Find Closest Node to Given Two Nodes
// LeetCode: https://leetcode.com/problems/find-closest-node-to-given-two-nodes/
// Language: javascript
// Runtime: 105 ms
// Memory: 55.9 MB
// Submitted: 2023-06-23

/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {
  let nb1 = new Set()
  let nb2 = new Set()

  let ans = -1

  while (node1 !== -1 || node2 !== -1) {
    if (node1 !== -1) {
      if (nb1.has(node1)) {
        node1 = -1
      } else {
        nb1.add(node1)
      }
    }
    if (node2 !== -1) {
      if (nb2.has(node2)) {
        node2 = -1
      } else {
        nb2.add(node2)
      }
    }

    if (nb1.has(node2))
      ans = node2
    if (nb2.has(node1))
      ans = ans === -1 ? node1 : Math.min(ans, node1)
    if (node1 !== -1)
      node1 = edges[node1]
    if (node2 !== -1)
      node2 = edges[node2]
    if (ans !== -1) return ans
  }

  return ans
};
