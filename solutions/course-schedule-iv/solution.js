// Problem: Course Schedule IV
// LeetCode: https://leetcode.com/problems/course-schedule-iv/
// Language: javascript
// Runtime: 136 ms
// Memory: 55.5 MB
// Submitted: 2023-07-29

var checkIfPrerequisite = function (n, es, qs) {
    let gg = Array.from({ length: n }, () => new Array(n).fill(-1))
    let g = Array.from({ length: n }, () => new Array())
    let vis = Array.from({ length: n }, () => 0)
    /*
        a a x x x
            a   x x x x
            A
    
            1   1   1  1
            a   0   0  0
            a   -1 -1 -1
            a 
        a   a
            a 
            a 
    */

    for (let [u, v] of es) {
        g[u].push(v)
        gg[u][v] = 1
    }

    function bfs(s, t) {
        if (gg[s][t] !== -1) return gg[s][t]

        let q = [s];
        for (let i = 0; i < n; i++) vis[i] = 0

        let q2 = []
        while (q.length) {
            for (let u of q) {
                if (u === t) {
                    return (gg[s][t] = 1)
                }
                for (let v of g[u]) {
                    gg[s][v] = 1
                    if (vis[v]) continue;
                    vis[v] = 1
                    q2.push(v);
                }
            }
            q = q2
            q2 = []
        }
        return (gg[s][t] = 0)
    }

    return qs.map(([s, t]) => bfs(s, t))
};

var checkIfPrerequisite = function (n, es, qs) {
    let gg = Array.from({ length: n }, () => new Array(n).fill(-1))
    let g = Array.from({ length: n }, () => new Array())
    let vis = Array.from({ length: n }, () => 0)
    /*
        a a x x x
            a   x x x x
            A
                       u
            a   -1 -1  0
            a   -1 -1  t
            a   -1 -1 -1
            a 
        s   a
            a 
            a 
    */
    for (let [u, v] of es) {
        g[u].push(v)
        gg[u][v] = 1
    }
    function dfs(s, t) {
        for (let i = 0; i < n; i++) vis[i] = 0

        function dfs_(u) {
            if (gg[u][t] !== -1) return gg[u][t]

            if (vis[u]) return 0;
            vis[u] = 1
            if (u === t) {
                return (gg[s][t] = 1)
            }
            for (let v of g[u]) {
                gg[s][v] = 1

                if (dfs_(v))
                    return (gg[v][t] = 1)
                else
                    gg[v][t] = 0
            }
            return (gg[u][t] = 0)
        }

        return dfs_(s)
    }

    return qs.map(([s, t]) => dfs(s, t))
};

