// Problem: Path with Maximum Probability
// LeetCode: https://leetcode.com/problems/path-with-maximum-probability/
// Language: javascript
// Runtime: 494 ms
// Memory: 123.1 MB
// Submitted: 2023-06-20

cl = console.log
var maxProbability = function (n, edges, succProb, start, end) {
    edges.forEach((e, i) => e.push(succProb[i]));

    let g = Array.from({ length: n }, () => []);

    for (let [u, v, c] of edges) {
        g[u].push([v, c])
        g[v].push([u, c])
    }

    function Pair(v, psf, wsf) {
        this.v = v
        this.psf = psf
        this.wsf = wsf
    }
    let distance = new Array(n).fill(0);
    distance[start] = 1
    function dijkstra(u) {
        let pq = new PriorityQueueMinHeap(x => x.wsf);
        pq.enqueue(new Pair(u, u + ',', 1));

        while (!pq.isEmpty()) {
            let p = pq.dequeue();
            let [u, psf, wsf] = [p.v, p.psf, p.wsf]

            for (let [v, c] of (g[u] || [])) {
                let temp = wsf * c;
                if (temp > distance[v]) {
                    distance[v] = temp;
                    pq.enqueue(new Pair(v, psf + v + ',', temp));
                }
            }
        }

    }

    dijkstra(start)
    // cl(g, distance)
    // if (Object.keys(distance).length === n)
    //     return Math.max(...Object.values(distance))
    return distance[end]
};


// PriorityQueueMinHeap
class PriorityQueueMinHeap {
    constructor(p = (x) => x) {
        this.queue = [];
        this.p = p;
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    swap(i, j) {
        let temp = this.queue[i];
        this.queue[i] = this.queue[j];
        this.queue[j] = temp;
    }
    printQueue() {
        console.log(this.queue, "length: ", this.queue.length);
    }
    enqueue(val) {
        this.queue.push(val);
        let ind = this.queue.length - 1;
        while (ind) {
            if (
                this.p(this.queue[ind] || []) >
                this.p(this.queue[parseInt((ind - 1) / 2)] || [])
            ) {
                this.swap(ind, parseInt((ind - 1) / 2));
            }
            ind = parseInt((ind - 1) / 2);
        }
    }
    dequeue() {
        this.swap(0, this.queue.length - 1);
        let deleted = this.queue.pop();
        let ind = 0;
        while (this.queue.length > ind) {
            if (
                this.p(this.queue[2 * ind + 1] || []) >
                this.p(this.queue[2 * ind + 2] || []) ||
                this.p(this.queue[2 * ind + 2] || []) === undefined
            ) {
                if (
                    this.p(this.queue[2 * ind + 1] || []) > this.p(this.queue[ind] || [])
                ) {
                    this.swap(ind, 2 * ind + 1);
                    ind = 2 * ind + 1;
                } else {
                    break;
                }
            } else if (
                this.p(this.queue[2 * ind + 1] || []) <=
                this.p(this.queue[2 * ind + 2] || [])
            ) {
                if (
                    this.p(this.queue[2 * ind + 2] || []) > this.p(this.queue[ind] || [])
                ) {
                    this.swap(ind, 2 * ind + 2);
                    ind = 2 * ind + 2;
                } else {
                    break;
                }
            } else {
                break;
            }
        }
        return deleted;
    }

}
