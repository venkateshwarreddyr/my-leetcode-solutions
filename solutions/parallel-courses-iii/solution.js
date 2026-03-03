// Problem: Parallel Courses III
// LeetCode: https://leetcode.com/problems/parallel-courses-iii/
// Language: javascript
// Runtime: 218 ms
// Memory: 106 MB
// Submitted: 2023-10-18

 cl = console.log

var minimumTime = function (n, relations, time) {
    let queue = [];
    n++
    // indegree
    let indeg = new Array(n).fill(0)
    let g = Array.from({ length: n }, () => [])
    let completionTime = new Array(n).fill(0)

    for (let [u, v] of relations) {
        g[u].push(v)
        indeg[v]++
    }
    time.unshift(-1)

    for (let u = 1; u < n; u++) {
        if (indeg[u] === 0) {
            queue.push(u);
            completionTime[u] = time[u]
        }
    }
    cl(completionTime)
    cl(time)
    while (queue.length) {
        let u = queue.shift()
        for (let v of g[u]) {
            completionTime[v] = Math.max(completionTime[v], completionTime[u] + time[v])
            indeg[v]--;
            if (indeg[v] === 0) {
                queue.push(v);
            }
        }
        indeg[u] = -1;
    }
    cl(completionTime)
    cl(time)
    return Math.max(...completionTime);
};
/**
[ 0, 3, 0, 5 ]
[ -1, 3, 2, 5 ]
[ 0, 3, 5, 5 ]
[ -1, 3, 2, 5 ]
    cl(completionTime)
    cl(time)
 */
