// Problem: Minimum Difficulty of a Job Schedule
// LeetCode: https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/
// Language: javascript
// Runtime: 130 ms
// Memory: 59.4 MB
// Submitted: 2026-01-15

var minDifficulty = function (jobDifficulties, totalDays) {
    const n = jobDifficulties.length;

    // jobs < days - can't do at least 1 job/day
    if (n < totalDays) return -1;

    // key = "index,daysLeft"
    const memo = new Array(n).fill(0).map(() => new Array(totalDays + 1));

    // Cost of Future Days
    const dfs = (startIndex, daysLeft) => {
        // last day, take all remaining jobs, cost = max difficulty
        if (daysLeft === 1) return Math.max(...jobDifficulties.slice(startIndex));
        if (memo[startIndex][daysLeft] !== undefined) return memo[startIndex][daysLeft];

        let todayCost = 0;
        let min = Infinity;

        // leave 1 job for each daysLeft-1 days
        for (let i = startIndex; i + daysLeft <= n; i++) {
            // today's cost = current batch max
            todayCost = Math.max(todayCost, jobDifficulties[i]);
            // goto future batch
            const costFromStartIndex = todayCost + dfs(i + 1, daysLeft - 1);
            min = Math.min(min, costFromStartIndex);
        }

        return (memo[startIndex][daysLeft] = min);
    };

    return dfs(0, totalDays);
};

