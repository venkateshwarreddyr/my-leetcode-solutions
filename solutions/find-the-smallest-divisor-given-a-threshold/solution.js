// Problem: Find the Smallest Divisor Given a Threshold
// LeetCode: https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/
// Language: javascript
// Runtime: 66 ms
// Memory: 46.4 MB
// Submitted: 2023-07-13

cl = console.log

function getVal(a, divisor) {
    // a.sort((a, b) => a - b)
    let sum = 0

    for (let e of a) {
        sum += Math.ceil(e / divisor)
    }

    return sum
}

var smallestDivisor = function (a, threshold) {

    let lo = 1, hi = Math.max(...a)
    while (lo <= hi) {
        let mid = Math.trunc(lo / 2 + hi / 2)
        let val = getVal(a, mid)
        if (val <= threshold) {
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }

    return lo
};
