// Problem: Maximize Amount After Two Days of Conversions
// LeetCode: https://leetcode.com/problems/maximize-amount-after-two-days-of-conversions/
// Language: javascript
// Runtime: 145 ms
// Memory: 68.4 MB
// Submitted: 2025-09-01


function maxAmount(initialCurrency, pairs1, rates1, pairs2, rates2) {
    const d1 = build(pairs1, rates1, initialCurrency)
    const d2 = build(pairs2, rates2, initialCurrency)
    let ans = 0
    for (const [currency, rate] of Object.entries(d2)) {
        if (currency in d1) {
            ans = Math.max(ans, d1[currency] / rate)
        }
    }
    return ans
}

function build(pairs, rates, init) {
    const g = {}
    const d = {}
    for (let i = 0; i < pairs.length; i++) {
        const [a, b] = pairs[i]
        const r = rates[i]

        g[a] = g[a] ?? []
        g[b] = g[b] ?? []
        g[a].push([b, r])
        g[b].push([a, 1 / r])
    }
    dfs(g, d, init, 1.0)
    console.log("g", g)
    console.log("d", d)
    console.log()
    return d
}

function dfs(g, d, a, v) {
    if (a in d) {
        return
    }

    d[a] = v
    for (const pair of g[a] || []) {
        const [b, r] = pair

        if (!(b in d)) {
            dfs(g, d, b, v * r)
        }
    }
}

