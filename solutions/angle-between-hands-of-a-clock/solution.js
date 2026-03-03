// Problem: Angle Between Hands of a Clock
// LeetCode: https://leetcode.com/problems/angle-between-hands-of-a-clock/
// Language: javascript
// Runtime: 0 ms
// Memory: 53.6 MB
// Submitted: 2025-11-08

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {

    let degFactor = (minutes / 60)
    const hourHand = hour + degFactor
    const minuteHand = minutes / 5

    return Math.min(
        Math.abs(hourHand - minuteHand),
        12 - Math.abs(hourHand - minuteHand)
    ) * 30
};
