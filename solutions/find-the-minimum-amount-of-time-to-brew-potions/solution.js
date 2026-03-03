// Problem: Find the Minimum Amount of Time to Brew Potions
// LeetCode: https://leetcode.com/problems/find-the-minimum-amount-of-time-to-brew-potions/
// Language: javascript
// Runtime: 404 ms
// Memory: 55.9 MB
// Submitted: 2025-11-14

var minTime = function (skill, mana) {
    let n = skill.length;
    let m = mana.length;
    const times = new Array(n).fill(0);

    for (let i = 0; i < m; i++) {
        let currTime = 0

        for (let j = 0; j < n; j++) {
            currTime = Math.max(currTime, times[j]) + mana[i] * skill[j]
        }

        times[n - 1] = currTime

        for (let j = n - 2; j >= 0; j--) {
            times[j] = times[j + 1] - mana[i] * skill[j + 1]
        }

    }
    return times[n - 1];
};
