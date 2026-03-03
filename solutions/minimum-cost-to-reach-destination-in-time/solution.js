// Problem: Minimum Cost to Reach Destination in Time
// LeetCode: https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/
// Language: javascript
// Runtime: 1082 ms
// Memory: 87.9 MB
// Submitted: 2023-09-09

cl = console.log

var minCost = function (maxTime, edges, passingFees) {
    const n = passingFees.length;
    const graph = Array.from({ length: n }, () => ({}))

    for (let i = 0; i < edges.length; ++i) {
        const [from, to, time] = edges[i];

        graph[from][to] = Math.min(graph[from][to] ?? Infinity, time);

        graph[to][from] = Math.min(graph[to][from] ?? Infinity, time);
    }

    const { PriorityQueue } = require("@datastructures-js/priority-queue");
    const q = new PriorityQueue({ compare: (a, b) => a[2] - b[2] });
    q.enqueue([0, 0, passingFees[0]]);

    const bestTimes = new Array(n).fill(Infinity);

    while (q.size()) {
        const [currNode, currTime, priority] = q.dequeue();
        cl([currNode, currTime, priority])
        if (currNode === n - 1) {
            return priority;
        }

        for (const node in graph[currNode]) {
            const nextNode = Number(node);
            const nextTime = graph[currNode][node] + currTime;

            if (nextTime <= maxTime && nextTime < bestTimes[nextNode]) {
                bestTimes[nextNode] = nextTime;
                q.enqueue([nextNode, nextTime, passingFees[nextNode] + priority]);
            }
        }
    }
    return -1;
};
