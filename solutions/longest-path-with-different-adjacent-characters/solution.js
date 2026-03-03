// Problem: Longest Path With Different Adjacent Characters
// LeetCode: https://leetcode.com/problems/longest-path-with-different-adjacent-characters/
// Language: javascript
// Runtime: 1892 ms
// Memory: 69.4 MB
// Submitted: 2023-08-22

cl = console.log
var longestPath = function (parents, s) {
    let parent = s.split("")
    let n = parent.length
    let indeg = new Array(n).fill(0)
    let res = 1

    for (let i = 1; i < n; i++) {
        indeg[parents[i]]++
    }

    let q = [];
    let an = new Array(n).fill(1)
    for (let u = 1; u < n; u++) {
        if (indeg[u] === 0) q.push(u);
    }

    while (q.length) {
        let u = q.shift()
        let p = parents[u]
        indeg[p]--
        if (indeg[p] === 0 && p !== 0) {
            q.push(p)
        }
        if (parent[p] === parent[u]) continue

        res = Math.max(res, an[p] + an[u])
        an[p] = Math.max(an[p], an[u] + 1)

    }

    return res
};

