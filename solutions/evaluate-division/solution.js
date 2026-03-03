// Problem: Evaluate Division
// LeetCode: https://leetcode.com/problems/evaluate-division/
// Language: javascript
// Runtime: 62 ms
// Memory: 42.3 MB
// Submitted: 2023-05-17

cl = console.log
var calcEquation = function (equations, values, queries) {
    let n = equations.length;

    let g = {

    };

    const find = (a) => {
        if (!g[a]) g[a] = [a, 1]
        let [id, val] = g[a]
        if (id !== a) {
            let [newId, newVal] = find(id)
            g[a] = [newId, newVal * val]
        }
        return g[a]
    };

    const union = (a, b, value) => {
        let [u, uw] = find(a);
        let [v, vw] = find(b);

        if (u !== v) {
            g[u] = [v, (value * vw) / uw];
        }
    };

    for (let i = 0; i < n; i++) {
        let [a, b] = equations[i];
        let value = values[i];
        union(a, b, value);
    }
    cl(g);
    let an = []
    for (let [a, b] of queries) {
        if (!g[a] || !g[b]) an.push(-1)
        else if (a == b) an.push(1)
        else {
            let [u, uw] = find(a);
            let [v, vw] = find(b);
            if (u == v)
                an.push(uw / vw)
            else 
                an.push(-1)
        }
    }
    return an;

};
