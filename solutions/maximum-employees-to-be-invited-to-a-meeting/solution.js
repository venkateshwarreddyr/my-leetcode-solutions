// Problem: Maximum Employees to Be Invited to a Meeting
// LeetCode: https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/
// Language: javascript
// Runtime: 163 ms
// Memory: 75.2 MB
// Submitted: 2023-08-30

cl = console.log
var maximumInvitations = function (parent) {
  // There are two main cases:
  // 1. Forming a large ring
  // 2. Starting with each a->b and b->a two-way relationship node,
  //    then a goes down to find the maximum height and b goes down to find the maximum height

  const n = parent.length
  const inDegrees = new Array(n).fill(0)

  // Count the incoming edges (in-degrees)
  for (let u = 0; u < n; u++) {
    inDegrees[parent[u]]++
  }

  let queue = []
  const heights = new Array(n).fill(1)

  // Initialize queue with nodes having no incoming edges
  for (let u = 0; u < n; u++) {
    if (inDegrees[u] === 0) {
      queue.push(u)
    }
  }
  cl(inDegrees)
  cl(queue)
  // Topological sort and compute heights
  while (queue.length) {
    const nqueue = []
    for (let u of queue) {
      const v = parent[u]
      heights[v] = Math.max(heights[v], heights[u] + 1)
      if (--inDegrees[v] === 0) {
        nqueue.push(v)
      }
    }
    queue = nqueue
  }
  cl(heights)
  const visited = new Array(n)
  let maxInvitations = 0
  let directFriends = 0

  for (let u = 0; u < n; u++) {
    if (visited[u] || inDegrees[u] === 0) {
      continue
    }
    let current = u
    let len = 0

    while (!visited[current]) {
      len++
      visited[current] = true
      current = parent[current]
    }

    maxInvitations = Math.max(maxInvitations, len)

    if (len === 2) {
      directFriends += heights[u] + heights[parent[u]]
    }
  }

  // Return the maximum of maxInvitations and directFriends
  return Math.max(maxInvitations, directFriends)
}
