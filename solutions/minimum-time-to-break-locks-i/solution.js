// Problem: Minimum Time to Break Locks I
// LeetCode: https://leetcode.com/problems/minimum-time-to-break-locks-i/
// Language: javascript
// Runtime: 674 ms
// Memory: 56.8 MB
// Submitted: 2026-01-10

var findMinimumTime = function (lockStrength, k) {
    const n = lockStrength.length;
    let totalTimeToBreakAllLocks = Infinity;

    function bt(pathLockIndices, unlockedLocks) {
        if (pathLockIndices.length === n) {
            let totalTimeToBreak = 0;
            let factorX = 1;
            for (const i of pathLockIndices) {
                totalTimeToBreak += Math.ceil(lockStrength[i] / factorX);
                factorX += k;
            }
            totalTimeToBreakAllLocks = Math.min(totalTimeToBreakAllLocks, totalTimeToBreak);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (!unlockedLocks[i]) {
                unlockedLocks[i] = true;
                pathLockIndices.push(i);

                bt(pathLockIndices, unlockedLocks);

                pathLockIndices.pop();
                unlockedLocks[i] = false;
            }
        }
    }

    bt([], new Array(n).fill(false));
    return totalTimeToBreakAllLocks;
};

var findMinimumTime22222 = function (lockStrength, k) {
    const n = lockStrength.length;
    const numStates = 1 << n;
    const dp = new Array(numStates).fill(Infinity);
    dp[0] = 0;

    for (let mask = 0; mask < numStates; mask++) {
        if (dp[mask] === Infinity) continue;

        const locksBroken = countSetBits(mask);
        const factorX = 1 + locksBroken * k;

        for (let i = 0; i < n; i++) {
            const isAlreadyBroken = (mask >> i) & 1;

            if (!isAlreadyBroken) {
                const timeToBreak = Math.ceil(lockStrength[i] / factorX);
                const nextMask = mask | (1 << i);

                if (dp[mask] + timeToBreak < dp[nextMask]) {
                    dp[nextMask] = dp[mask] + timeToBreak;
                }
            }
        }
    }

    return dp[numStates - 1];
};

function countSetBits(num) {
    let count = 0;
    for (let i = 0; i < 32; i++) {
        if ((num >> i) & 1) count++;
    }
    return count;
}

