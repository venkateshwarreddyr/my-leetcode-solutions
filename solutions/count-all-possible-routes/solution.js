// Problem: Count All Possible Routes
// LeetCode: https://leetcode.com/problems/count-all-possible-routes/
// Language: javascript
// Runtime: 489 ms
// Memory: 66.9 MB
// Submitted: 2026-01-15

var countRoutes = function (locations, source, destination, totalFuel) {
    const MOD = 1e9 + 7;
    const n = locations.length;
    const memo = new Map();

    function dfs(u, remainingFuel) {
        if (remainingFuel < 0) return 0

        //{ 'from, remaining fuel' : waysToReachDest }
        const key = `${u},${remainingFuel}`;
        if (memo.has(key)) return memo.get(key);

        // validPathCountToDesitnation, 1 valid route, continue to reach all other v
        let waysToReachDest = u === destination ? 1 : 0;

        for (let v = 0; v < n; v++) {
            if (v === u) continue;

            const requiredFuel = Math.abs(locations[u] - locations[v]);
            waysToReachDest += dfs(v, remainingFuel - requiredFuel);
            waysToReachDest %= MOD;
        }

        memo.set(key, waysToReachDest);
        return waysToReachDest;
    }

    return dfs(source, totalFuel);
};

