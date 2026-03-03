// Problem: Calculate Delayed Arrival Time
// LeetCode: https://leetcode.com/problems/calculate-delayed-arrival-time/
// Language: javascript
// Runtime: 74 ms
// Memory: 42.4 MB
// Submitted: 2023-04-23

/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    
    return (arrivalTime+ delayedTime)%24
};
