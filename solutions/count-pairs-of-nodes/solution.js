// Problem: Count Pairs Of Nodes
// LeetCode: https://leetcode.com/problems/count-pairs-of-nodes/
// Language: javascript
// Runtime: 2281 ms
// Memory: 146.6 MB
// Submitted: 2023-09-20

cl = console.log
var countPairs = function (n, edges, queries) {
    let deg = new Array(n).fill(0)
    let ob = {}
    for (let [u, v] of edges) {
        u--
        v--
        let x = JSON.stringify([u, v].sort((a, b) => a - b))
        ob[x] = ob[x] || 0
        ob[x]++

        deg[u]++
        deg[v]++
    }
    sorteddeg = [...deg].sort((a, b) => a - b)
    let an = []
    for (let q of queries) {
        let l = 0, r = n - 1, total = 0

        while (l < r) {
            if (sorteddeg[l] + sorteddeg[r] > q) {
                r--
            } else {
                total += (n - r - 1)
                l++
            }
        }

        while (l < n) {
            total += (n - l - 1);
            l++;
        }

        for (let key in ob) {
            let [u, v] = JSON.parse(key)
            if (deg[u] + deg[v] > q && deg[u] + deg[v] - ob[key] <= q) {
                total--
            }
        }
        an.push(total)
    }

    return an
}

