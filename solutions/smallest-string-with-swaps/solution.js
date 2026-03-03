// Problem: Smallest String With Swaps
// LeetCode: https://leetcode.com/problems/smallest-string-with-swaps/
// Language: javascript
// Runtime: 2456 ms
// Memory: 78.3 MB
// Submitted: 2023-05-17

// cl = console.log
var smallestStringWithSwaps = function (s, pairs) {
    let n = s.length;
    s = s.split('')
    // let g = new Map();
    // let bi = true; // bi-directional

    // pairs.forEach((edge) => {
    //     let [a, b] = edge;
    //     // a = s[a], b = s[b]
    //     if (!g.has(a)) {
    //         g.set(a, [[b, s[b]]]);
    //     } else {
    //         g.set(a, [...g.get(a), [b, s[b]]]);
    //     }

    //     if (bi) {
    //         if (!g.has(b)) {
    //             g.set(b, [[a, s[a]]]);
    //         } else {
    //             g.set(b, [...g.get(b), [a, s[a]]]);
    //         }
    //     }
    // });
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

    for (let [a, b] of pairs) {
        union(a, b)
    }
    g = g.map(e => find(e))
    let obj = {};
    for (let i = 0; i < n; i++) {
        let x = (g[i])
        if (!obj[x]) {
            obj[x] = []
        }
        obj[x].push(s[i])
    }
    // cl(obj)
    for (let key in obj) {
        obj[key].sort()
    }
    // cl(obj)
    let an = ''
    for (let i = 0; i < n; i++) {
        an += obj[(g[i])].shift()
    }
    return an;

};
