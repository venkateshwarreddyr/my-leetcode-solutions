// Problem: Minimum Cost of a Path With Special Roads
// LeetCode: https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/
// Language: javascript
// Runtime: 408 ms
// Memory: 50.2 MB
// Submitted: 2023-06-23

const getDist = (s, t) => {
    let [x1, y1] = s
    let [x2, y2] = t

    return Math.abs(x2 - x1) + Math.abs(y2 - y1)
}
cl = console.log
var minimumCost = function (start, target, specialRoads) {

    // function Pair(v, psf, wsf) {
    //     this.v = v;
    //     this.psf = psf;
    //     this.wsf = wsf;
    // }
    // let distance = {};
    // distance[start.toString()] = 0;
    // function dijkstra(u) {
    //     let pq = new PriorityQueueMinHeap((x) => x.wsf);
    //     pq.enqueue(new Pair(u, null, 0));

    //     while (!pq.isEmpty()) {
    //         let p = pq.dequeue();
    //         let [u, psf, wsf] = [p.v, p.psf, p.wsf];

    //         for (let [x1, y1, x2, y2, d] of specialRoads) {
    //             let temp = wsf + d + getDist(start, [x1, y1]);
    //             if (distance[[x2, y2].toString()] === undefined || temp < distance[[x2, y2].toString()]) {
    //                 distance[[x2, y2].toString()] = temp;
    //                 pq.enqueue(new Pair([x2, y2], null, temp));
    //             }
    //         }
    //     }
    // }
    // cl(distance)
    // dijkstra(start);

    let cost = Infinity
    let map = {}

    function dfs(start, tcost) {
        let sts = start.toString()
        if (map[sts] !== undefined && map[sts] <= tcost) {
            return;
        }
        if (tcost > cost) return;
        cost = Math.min(tcost + getDist(start, target), cost)
        map[sts] = tcost
        for (let [x1, y1, x2, y2, d] of specialRoads) {
            dfs([x2, y2], tcost + d + getDist(start, [x1, y1]))
        }
    }

    dfs(start, 0)

    return cost
}



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

