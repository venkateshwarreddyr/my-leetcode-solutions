// Problem: Frog Position After T Seconds
// LeetCode: https://leetcode.com/problems/frog-position-after-t-seconds/
// Language: javascript
// Runtime: 67 ms
// Memory: 48.5 MB
// Submitted: 2023-08-28

cl = console.log
var frogPosition = function (n, edges, t, target) {
    let g = Array.from({ length: n + 1 }, () => []);

    for (let [u, v] of edges) {
        g[u].push(v)
        g[v].push(u)
    }


    function bfs() {
        function bfs_(u) {
            let q = [[u, -1, 1, t]];

            while (q.length) {
                let [u, p, probability, t] = q.shift();
                let hasVis = 0
                for (let v of g[u]) {
                    if (v === p) {
                        hasVis = 1
                        break
                    }
                }
                if (t === -1) return 0
                if (u === target && t === 0) return probability;
                if (u === target && g[u].length === hasVis) return probability;
                if (u === target && g[u].length !== hasVis) return 0;


                for (let v of g[u]) {
                    if (v === p) continue
                    q.push([v, u, probability / (g[u].length - hasVis), t - 1]);
                }
            }

            return 0
        }

        return bfs_(1)
    }


    return bfs()
};
/**

3 - 2 - 1

 */
