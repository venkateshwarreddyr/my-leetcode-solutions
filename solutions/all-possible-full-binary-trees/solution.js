// Problem: All Possible Full Binary Trees
// LeetCode: https://leetcode.com/problems/all-possible-full-binary-trees/
// Language: javascript
// Runtime: 125 ms
// Memory: 53.2 MB
// Submitted: 2023-06-16

var allPossibleFBT = function (n) {
  if (n % 2 == 0) return []

  let o = {}
  function dfs(n) {
    if (n === 1) return [new TreeNode(0, null, null)]
    if (o[n] !== undefined) return o[n]

    let arr = []
    for (let lnodes = 1; lnodes < n; lnodes += 2) {
      let rnodes = n - 1 - lnodes

      let leftnodearr = dfs(lnodes)
      let rightnodearr = dfs(rnodes)

      for (let ln of leftnodearr) {
        for (let rn of rightnodearr) {
          arr.push(new TreeNode(0, ln, rn))
        }
      }
    }
    return (o[n] = arr)
  }

  return dfs(n)
};

