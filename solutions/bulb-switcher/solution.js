// Problem: Bulb Switcher
// LeetCode: https://leetcode.com/problems/bulb-switcher/
// Language: javascript
// Runtime: 0 ms
// Memory: 55.1 MB
// Submitted: 2026-01-17

function bulbSwitch(n) {
    // Perfect squares ≤ n
    // 1, 4, 9, 16, ..., k² where k² ≤ n
    //                         so k ≤ √n
    return Math.floor(Math.sqrt(n));
}

function bulbSwitch_TLE2(n) {
    // Bulb is ON → toggled odd number of times
    // Bulb at position k is toggled in round r if r divides k evenly.
    // Perfect Squares have odd factors
    let onCount = 0;

    for (let pos = 1; pos <= n; pos++) {
        const divisorCount = countDivisors(pos);
        if (divisorCount % 2 === 1) {
            onCount++;
        }
    }

    return onCount;

    function countDivisors(num) {
        let count = 0;
        for (let d = 1; d * d <= num; d++) {
            if (num % d === 0) {
                count++; // d is a divisor
                if (d !== num / d) {
                    count++; // num/d is also a divisor
                }
            }
        }
        return count;
    }
}

function bulbSwitch_TLE(n) {
    if (n === 0) return 0;

    const bulbs = new Array(n).fill(false);

    for (let round = 1; round <= n; round++) {
        // toggle every round-th bulb
        for (let i = round - 1; i < n; i += round) {
            bulbs[i] = !bulbs[i];
        }
    }

    // count ON bulbs
    return bulbs.filter(x => x).length;
}

