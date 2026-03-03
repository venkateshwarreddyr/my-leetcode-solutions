// Problem: Count Ways to Build Rooms in an Ant Colony
// LeetCode: https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/
// Language: javascript
// Runtime: 1729 ms
// Memory: 142.5 MB
// Submitted: 2023-09-19

var waysToBuildRooms = function (roomDependencies) {
    const MOD = 1000000007n

    const n = roomDependencies.length
    const g = Array.from({ length: n }, () => new Array())

    for (let u = 0; u < n; u++) {
        const room = roomDependencies[u]
        if (room !== -1) {
            g[room].push(u)
        }
    }

    function nCr(n, k) {
        if (k === 0n) return 1n
        if (k > n / 2n) return nCr(n, n - k)

        let result = 1n
        for (let i = 1n; i <= k; i++) {
            result = (result * (n - i + 1n)) / i
        }

        return result % MOD
    }

    function dfs(u) {
        let permutations = 1n
        let totalRooms = 0n

        for (const v of g[u] || []) {
            const [dependentPermutations, dependentTotalRooms] = dfs(v)
            totalRooms += dependentTotalRooms
            permutations =
                ((((permutations * dependentPermutations) % MOD) *
                    nCr(totalRooms, dependentTotalRooms)) % MOD) %
                MOD
        }

        return [permutations, totalRooms + 1n]
    }

    return Number(dfs(0)[0] % MOD)
}
