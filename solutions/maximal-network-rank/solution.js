// Problem: Maximal Network Rank
// LeetCode: https://leetcode.com/problems/maximal-network-rank/
// Language: javascript
// Runtime: 1645 ms
// Memory: 83.5 MB
// Submitted: 2023-08-18

cl = console.log
var maximalNetworkRank = function (n, edges) {

    // let adjListArr
    // let cl = console.log

    // let MOD = 10 ** 9 + 7
    let g = {}

    const undirected = 1 // // undirected/bi-directional
    const withEdges = edges ? 1 : 0 // edges / adjListArr
    const withCost = 0

    if (withCost) {
        if (withEdges) {
            for (let [u, v, c] of edges) {
                g[u] = g[u] || []
                g[u].push([v, c])
                if (undirected) {
                    g[v] = g[v] || [] // undirected/bi-directional
                    g[v].push([u, c])
                }
            }
        }
    } else {
        if (withEdges) {
            for (let [u, v] of edges) {
                g[u] = g[u] || []
                g[u].push(v)
                if (undirected) {
                    g[v] = g[v] || [] // undirected/bi-directional
                    g[v].push(u)
                }
            }
        } else {
            n = adjListArr.length
            // for (let u in adjListArr) {
            //     let uadjs = adjListArr[u] || []
            //     for (let v of uadjs) {
            //         g[u] = g[u] || []
            //         g[u].push(+v)
            //         // undirected is assumed as given
            //         // if (undirected) {
            //         //     g[v] = g[v] || [] // undirected/bi-directional
            //         //     g[v].push(u)
            //         // }
            //     }
            // }
            g = adjListArr
            // cl('g', g)
        }
    }

    let s = 0
    let d = n - 1

    let minpathcost2d = Infinity
    let minpathcost2dcount = 0

    // let found = 0
    let setvisinpath = new Set()
    // let setvisAllinpath = new Set()
    // let ovisAllinpath = {}
    // let path = []
    // let paths = []
    let mm_remainingcv2d = {}

    // let setvisAll = new Set()


    function bfsWrapper() {
        // cl(g)

        let minpathlen = Infinity

        function bfs(s) {
            let q = []
            // q.push(s)
            q.push([s, 0, new Set([s])])
            // setvisAll.add(s)
            // cl(q)

            while (q.length) {
                // let q2 = []
                // for (let i = 0; i < q.length; i++)
                {
                    // let [u, ulvl, upathset] = q[i]
                    let [u, ulvl, upathset] = q.shift()
                    if (ulvl >= minpathlen) {
                        continue
                    }
                    if (upathset.size === n) {
                        // reached all nodes
                        minpathlen = Math.min(minpathlen, ulvl)
                        return
                    }

                    let uadjs = g[u] || []
                    // for (let [v, c] of uadjs) {
                    for (let v of uadjs) {
                        // if (v === up) {
                        //     continue // back to gp
                        // }
                        if (v === u) {
                            continue // self loop
                        }
                        // if (rset.has(v)) {
                        //     continue
                        // }
                        // if (setvisAll.has(v)) {
                        //     continue
                        // }
                        // setvisAll.add(v)
                        // if (upathset.has(v)) {
                        //     continue
                        // }
                        q.push([v, ulvl + 1, new Set([...upathset, v])])
                        // q2.push([v, ulvl + 1, new Set([...upathset, v])])
                    }
                }
                // q = q2
                // cl(q)
            }

            // return setvis.size
        }
        let min = g.reduce((a, c) => Math.min(c.length, a), Infinity)
        for (let s = 0; s < n; s++) {
            if (g[s].length === min) {
                bfs(s)
                // cl(s, minpathlen)
            }
        }

        return (minpathlen === Infinity) ? 0 : minpathlen
    }

    // return bfsWrapper()
    // dfsWrapper();

    function dfsWrapper() {


        function dfs(u, up, pathcosts2u) {
            // cl('from', u)

            // if (pathcosts2u > minpathcost2d) {
            //   return mm_remainingcv2d[u] = pathcosts2u
            // }
            if (mm_remainingcv2d[u] !== undefined) {
                // cl('    done mm')
                let [mincu2d, mincu2dcc] = mm_remainingcv2d[u]
                let total_c2d = pathcosts2u + mincu2d

                // paths.push([...path])
                if (total_c2d < minpathcost2d) {
                    minpathcost2d = total_c2d
                    minpathcost2dcount = mincu2dcc

                    return mm_remainingcv2d[u]
                } else if (total_c2d === minpathcost2d) {
                    minpathcost2dcount += mincu2dcc
                    // minpathcost2dcount = minpathcost2dcount % MOD

                    return mm_remainingcv2d[u]
                } else {
                    //
                }
                // mm_remainingcv2d[u] = minpathcost2d
                // return mm_remainingcv2d[u] = minpathcost2d // found = 1
                // return total_c2d
                // return minpathcost2d
                // return mm_remainingcv2d[u]
            }
            if (u === d) {
                // cl('    done d')
                // paths.push([...path])
                if (pathcosts2u < minpathcost2d) {
                    minpathcost2d = pathcosts2u
                    minpathcost2dcount = 1
                } else if (pathcosts2u === minpathcost2d) {
                    minpathcost2dcount++
                    // minpathcost2dcount = minpathcost2dcount % MOD
                } else {
                    //
                }
                // mm_remainingcv2d[u] = minpathcost2d
                // return mm_remainingcv2d[u] = minpathcost2d // found = 1
                return [0, 1]
            }

            if (setvisinpath.has(u)) {
                // cl('    issue ')
                return [Infinity, 0]
                // return // visited
            }
            setvisinpath.add(u)

            // setvisAllinpath.add(u)
            // ovisAllinpath[u] = ovisAllinpath[u] || 0
            // ovisAllinpath[u]++

            let mincu2d = Infinity
            let mincu2dcc = 0
            let uadjs = g[u] || []
            // for (let v of uadjs) {
            for (let [v, c] of uadjs) {
                if (v === up) {
                    continue // back to gp
                }
                if (v === u) {
                    continue // self loop
                }
                // cl('           u v c', u  , v, c,)

                // path.push(v)
                let [cv2d, cc] = dfs(v, u, pathcosts2u + c)
                // // cl(u, v, c, ' ', cv2d, cc)
                if (cv2d + c < mincu2d) {
                    mincu2d = cv2d + c
                    mincu2dcc = cc
                } else if (cv2d + c === mincu2d) {
                    mincu2dcc += cc
                }
                // path.pop()
            }
            // cl(u, 'mincu2d ', mincu2d, 'mincu2dcc', mincu2dcc)

            setvisinpath.delete(u)
            return (mm_remainingcv2d[u] = [mincu2d, mincu2dcc])
        }

        // path.push(s)
        // let [mincs2d, mincs2dcc] = dfs(s, -1, 0)
        // path.pop()

        // for (let s = 0; s < n; s++) {
        //   if (g[s]) {
        //     dfs(s)
        //   } else {
        //     ovisAllinpath[s] = ovisAllinpath[s] || 0
        //     ovisAllinpath[s]++
        //   }
        // }

        // // // cl(ovisAllinpath)

        // let ss = []
        // for (let s = 0; s < n; s++) {
        //   if (ovisAllinpath[s] === 1) {
        //     ss.push(s)
        //   }
        // }

        // for (let u = 0; u < n; u++) {
        //     let uadjs = g[u] || []
        //     if (uadjs.length === n - 1) {
        //         return u
        //     }
        // }

        // return mincs2dcc % MOD
        // cl(minpathcost2dcount, mincs2dcc)
        // return minpathcost2dcount % MOD
        // return ss
        // return found
        // return paths


        function fn(a, b) {
            let set = new Set()

            for (let u of (g[a] || [])) {
                set.add(u + ',' + a)
                set.add(a + ',' + u)
            }
            for (let u of (g[b] || [])) {
                set.add(b + ',' + u)
                set.add(u + ',' + b)
            }
            // cl(set)
            return set.size
        }
        // cl(g)
        let max = 0
        for (let u = 0; u < n; u++) {
            for (let v = u + 1; v < n; v++) {
                if (u !== v) {
                    max = Math.max(max, fn(u, v))
                }
            }
        }
        return max/2
    }

    return dfsWrapper()
}
