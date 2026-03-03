// Problem: The Time When the Network Becomes Idle
// LeetCode: https://leetcode.com/problems/the-time-when-the-network-becomes-idle/
// Language: javascript
// Runtime: 366 ms
// Memory: 172.5 MB
// Submitted: 2023-08-31

var networkBecomesIdle = function (edges, patience) {
    let n = patience.length
    let dir = false;
    function bfs() {
        let g = Array.from({ length: n }, () => []);

        for (let [u, v] of edges) {
            g[u].push(v);
            if (!dir) g[v].push(u);
        }

        function bfs_() {
            let q = [0];
            let vis = new Array(n);
            let time_arr = new Array(n).fill(0)
            vis[0] = 1
            let time = 0
            while (q.length) {
                let nq = []
                for (let u of q) {
                    time_arr[u] = time
                    for (let v of g[u]) {
                        if (vis[v]) continue
                        nq.push(v);
                        vis[v] = 1
                    }
                }
                time++
                q = nq
            }
            let an = 0

            for (let i = 1; i < n; i++) {
                let x = time_arr[i] * 2
                let y = (x - 1) % patience[i]
                an = Math.max(an, x + x - y)
            }
            // logic
            return an;
        }
        return bfs_();
    }

    return bfs();

};

/**

2 - 3
4+31

 */
