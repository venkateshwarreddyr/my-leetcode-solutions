// Problem: Distance to a Cycle in Undirected Graph
// LeetCode: https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/
// Language: javascript
// Runtime: 1134 ms
// Memory: 109.9 MB
// Submitted: 2024-04-29

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var distanceToCycle = function (n, edges) {
    let g = new Graph(n)
    g.build(edges)
    let an = g.get_distance_from_cycle()

    return an


};

class Graph {
    constructor(n) {
        this.g = Array.from({ length: n }, (_) => []);
        this.in_deg = new Array(n).fill(0)
        this.out_deg = new Array(n).fill(0)
        this.n = n
    }

    build(edges) {
        for (let [u, v] of edges) {
            this.g[u].push(v)
            this.in_deg[v]++
            this.out_deg[u]++

            this.in_deg[u]++
            this.out_deg[v]++
            this.g[v].push(u)

        }
    }


    get_cycle_nodes(g = this.g, indeg = [...this.in_deg]) {

        let n = indeg.length;
        const queue = [];

        for (let u = 0; u < n; u++) {
            if (indeg[u] === 1) queue.push(u);
        }

        while (queue.length) {
            let u = queue.shift();
            for (let v of g[u]) {
                if(indeg[v] === 1) continue
                indeg[v]--;
                if (indeg[v] === 1) {
                    queue.push(v);
                }
            }
        }
        
        let cycle = new Set()
        for (let u = 0; u < n; u++) {
            if (indeg[u] > 1) cycle.add(u);
        }
        return cycle;
    };

    get_distance_from_cycle(g = this.g, indeg = [...this.in_deg]) {

        let cycle_nodes = this.get_cycle_nodes()
        let dist_from_cycle = new Array(this.n).fill(0)
        const queue = [...cycle_nodes];
        let vis = new Set()
        while(queue.length) {
            let u = queue.shift();
            vis.add(u)
            for(let v of g[u]) {
                if(vis.has(v)) continue
                if(cycle_nodes.has(v)) continue
                dist_from_cycle[v]+=(dist_from_cycle[u] + 1)

                queue.push(v)
            }
        }


        return dist_from_cycle
    }

}
