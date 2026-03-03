// Problem: Range Product Queries of Powers
// LeetCode: https://leetcode.com/problems/range-product-queries-of-powers/
// Language: javascript
// Runtime: 255 ms
// Memory: 89 MB
// Submitted: 2023-10-11

cl = console.log
MOD = 10 ** 9 + 7
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function (n, queries) {
    // [1,2,4,8]
    // [1,2,8,64]
    let p = []
    let np = []
    let bn = n.toString(2)
    cl(bn)
    for (let i = 0; i < bn.length; i++) {
        if (bn[bn.length - i - 1] === "1") {
            let x = (2 ** i) % MOD
            p.push(x)
            np.push(((np[np.length - 1] ?? 1) * x))
        }
    }

    cl(p)
    cl(np)

    return queries.map(([a, b]) => {
        if (a === 0) {
            return np[b] % MOD
        }
        if (a === b) {
            return p[b] % MOD
        }

        return (np[b] / (np[a - 1] ?? 1)) % MOD
    })
};

/**
    1111
      10


 */
