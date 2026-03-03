// Problem: Time Needed to Inform All Employees
// LeetCode: https://leetcode.com/problems/time-needed-to-inform-all-employees/
// Language: javascript
// Runtime: 261 ms
// Memory: 95.7 MB
// Submitted: 2025-12-27

var numOfMinutes = function (n, headID, manager, informTime) {
    let adj = [];
    for (let i = 0; i < n; i++) {
        adj[manager[i]] ??= [];
        adj[manager[i]].push(i);
    }

    let res = -Infinity // max inform time
    let q = [[headID, informTime[headID]]];
    while (q.length) {
        let q2 = [];
        for (let i = 0; i < q.length; i++) {
            let [u, uInformTime] = q[i];
            res = Math.max(res, uInformTime);
            for (let v of adj[u] || []) {
                q2.push([v, uInformTime + informTime[v]]);
            }
        }
        q = q2;
    }
    return res;
};

