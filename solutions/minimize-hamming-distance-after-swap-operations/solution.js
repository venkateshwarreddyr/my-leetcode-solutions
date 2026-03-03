// Problem: Minimize Hamming Distance After Swap Operations
// LeetCode: https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/
// Language: javascript
// Runtime: 285 ms
// Memory: 87.5 MB
// Submitted: 2023-05-21

cl = console.log
var minimumHammingDistance = function (s, t, allowedSwaps) {
    let n = s.length;

    let g = [...new Array(n)].map((_, i) => i);

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

    for (let [a, b] of allowedSwaps) {
        union(a, b)
    }

    // cl(map)
    // cl(g)
    let map = {}
    for (let i = 0; i < n; i++) {
        let x = find(i);
        map[x] = map[x] || {}
        map[x][s[i]] = (map[x][s[i]] || 0) + 1
    }

    // cl(map)
    let c = n;
    let b = 0;
    for (let i = 0; i < n; i++) {
        let x = find(i);
        if (map[x][t[i]]) {
            c--
            map[x][t[i]]--
            // if (!map[x][t[i]]) {
            //     delete map[x][t[i]]
            // }
        } else {
            b++;
        }
    }
    // cl({ c, b, n })

    return c;
};
