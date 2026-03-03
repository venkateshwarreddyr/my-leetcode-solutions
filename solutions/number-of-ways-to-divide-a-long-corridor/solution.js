// Problem: Number of Ways to Divide a Long Corridor
// LeetCode: https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/
// Language: javascript
// Runtime: 58 ms
// Memory: 79.4 MB
// Submitted: 2026-01-16

var numberOfWays = function (corridor) {
    const seatIndices = [];

    for (let i = 0; i < corridor.length; i++) {
        if (corridor[i] === 'S') {
            seatIndices.push(i);
        }
    }

    const n = seatIndices.length;

    if (n === 0 || n % 2 === 1) {
        return 0; // cannot form pairs - if no seats, or number of seats is odd
    }

    const MOD = 1_000_000_007n;
    let totalWays = 1n;

    for (let pairStart = 2; pairStart < n; pairStart += 2) {
        let endOfPrevPair = seatIndices[pairStart - 1];
        let startOfCurrPair = seatIndices[pairStart];

        // SS PP SS - end S=1, start S=4, Num of elements between = 4-1 - 1 = 2, so gaps = 2+1 = 3
        // 01 23 45
        let numOfElementsBetween = startOfCurrPair - endOfPrevPair - 1;
        let numOfDividersPossible = numOfElementsBetween + 1;

        // curr options   times(x)   new options, since  all are independent choices
        totalWays *= BigInt(numOfDividersPossible)
        totalWays %= MOD;
    }

    return Number(totalWays); // return standard/regular Number.
};

