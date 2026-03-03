// Problem: Satisfiability of Equality Equations
// LeetCode: https://leetcode.com/problems/satisfiability-of-equality-equations/
// Language: javascript
// Runtime: 81 ms
// Memory: 45.7 MB
// Submitted: 2023-05-18

cl = console.log
var equationsPossible = function (equations) {
    let n = equations.length;
    let g = [...new Array(26)].map((_, i) => i);

    const find = (a) => {
        return a === g[a] ? a : find(g[a]);
    };

    const union = (a, b) => {
        let u = find(a);
        let v = find(b);

        if (u > v) {
            g[u] = v;
        } else if (u < v) {
            g[v] = u;
        }
    };
    let q1 = equations.filter(e => e.includes("=="))
    let q2 = equations.filter(e => e.includes("!="))
    for (let eq of [...q1, ...q2]) {
        // cl(g)
        if (eq.includes("==")) {
            let [a, b] = eq.split("==");
            a = a.charCodeAt() - 97
            b = b.charCodeAt() - 97
            union(a, b)
        } else {
            let [a, b] = eq.split("!=")
            a = a.charCodeAt() - 97
            b = b.charCodeAt() - 97
            if (find(a) === find(b)) {
                return false;
            }
        }
    }
    return true;
};
