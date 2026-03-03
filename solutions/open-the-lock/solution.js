// Problem: Open the Lock
// LeetCode: https://leetcode.com/problems/open-the-lock/
// Language: javascript
// Runtime: 237 ms
// Memory: 72.5 MB
// Submitted: 2025-11-28


function allPossibleMoves(s) {
    let a = s.split('').map(e => +e)
    let sa = []

    for (let i = 0; i < 4; i++) {
        a[i] = (a[i] + 1) % 10
        sa.push(a.join(''))

        a[i] = (a[i] - 2 + 10) % 10
        sa.push(a.join(''))
        a[i] = (a[i] + 1 + 10) % 10

    }

    return sa
}

var openLock = function (deadends, target) {

    let q = ["0000"]
    let cc = 0
    let set = new Set(deadends)
    while (true) {
        let n = q.length
        let nq = []
        for (let i = 0; i < n; i++) {
            let s = q[i]
            if (set.has(s)) continue
            set.add(s)
            if (s === target) return cc
            let moves = allPossibleMoves(s)
            nq.push(...moves)
        }
        cc++

        q = nq
        if (!q.length) break
    }

    return -1
};
