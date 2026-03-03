// Problem: Lexicographically Smallest Equivalent String
// LeetCode: https://leetcode.com/problems/lexicographically-smallest-equivalent-string/
// Language: javascript
// Runtime: 104 ms
// Memory: 47.4 MB
// Submitted: 2023-05-15

cl = console.log
var smallestEquivalentString = function (s1, s2, baseStr) {
    let n = s1.length;
    let g = [...new Array(26)].map((_, i) => i);
    let an = '';

    const find = (a) => {
        if (a === g[a]) {
            return a;
        }

        return find(g[a])
    }

    for (let i = 0; i < n; i++) {
        a = s1.charCodeAt(i) - 97;
        b = s2.charCodeAt(i) - 97;

        let u1 = find(a);
        let u2 = find(b);

        if (u1 > u2) {
            g[u1] = u2
        }
        if (u1 < u2) {
            g[u2] = u1
        }

    }

    for (let i = 0; i < baseStr.length; i++) {
        let c = find(baseStr.charCodeAt(i) - 97)
        an += (String.fromCharCode(g[c] + 97))
    }
    cl({ an }, g)
    return an;

};
