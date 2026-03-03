// Problem: Parallel Courses II
// LeetCode: https://leetcode.com/problems/parallel-courses-ii/
// Language: javascript
// Runtime: 135 ms
// Memory: 48.2 MB
// Submitted: 2023-09-16

cl = console.log
var minNumberOfSemesters = function (n, edges, k) {
    let g = Array.from({ length: n }, () => [])
    let deg = new Array(n).fill(0)
    for (let [u, v] of edges) {
        u--
        v--
        g[u].push(v)
        deg[v]++
    }

    function comb(q) {
        let cqs = []

        function bt(pos, a) {

            if (a.length === k) {
                cqs.push([...a])
                return
            }
            if (pos === q.length) {
                return
            }
            a.push(q[pos])
            bt(pos + 1, a)
            a.pop()
            bt(pos + 1, a)
        }
        bt(0, [])
        return cqs
    }
    let minTime = Infinity
    function topsort(q, indeg = deg, visited = new Set(), time = 0) {

        for (let u of q) {
            if (visited.has(u)) continue
            visited.add(u)
            for (let v of g[u]) {
                indeg[v]--
            }
        }
        if (visited.size === n) {
            minTime = Math.min(minTime, time)
            return
        }

        let deg0withchilderen = []
        let deg0withoutchilderen = []
        for (let u = 0; u < n; u++) {
            if (visited.has(u)) continue
            if (indeg[u]) continue
            if (g[u].length) {
                deg0withchilderen.push(u)
            } else {
                deg0withoutchilderen.push(u)
            }
        }


        if (deg0withchilderen.length > k) {
            let cqs = comb(deg0withchilderen)
            for (let cq of cqs) {
                topsort(cq, [...indeg], new Set(visited), time + 1)
            }
        } else {
            while (deg0withchilderen.length < k && deg0withoutchilderen.length) {
                deg0withchilderen.push(deg0withoutchilderen.pop())
            }
            topsort(deg0withchilderen, [...indeg], new Set(visited), time + 1)
        }


    }
    topsort([])
    return minTime
};
