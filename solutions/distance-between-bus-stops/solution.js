// Problem: Distance Between Bus Stops
// LeetCode: https://leetcode.com/problems/distance-between-bus-stops/
// Language: javascript
// Runtime: 63 ms
// Memory: 42.2 MB
// Submitted: 2023-05-31

cl = console.log
var distanceBetweenBusStops = function (dist, s, d) {
    let n = dist.length
    let a = 0
    let b = 0
    for (let i = s; i !== d;) {
        a += dist[(i)]
        i = (i + 1) % n
    }

    for (let i = d; i !== s;) {
        b += dist[(i)]
        i = (i + 1) % n
    }
    return Math.min(a, b)
};
