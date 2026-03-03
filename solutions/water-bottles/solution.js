// Problem: Water Bottles
// LeetCode: https://leetcode.com/problems/water-bottles/
// Language: javascript
// Runtime: 48 ms
// Memory: 49 MB
// Submitted: 2024-07-07

cl = console.log
var numWaterBottles = function (numBottles, numExchange) {
    let an = numBottles
    while (numBottles >= numExchange) {
        let x = (Math.trunc(numBottles / numExchange))
        numBottles = numBottles % numExchange + x
        an = an + x
    }

    return an;
};
