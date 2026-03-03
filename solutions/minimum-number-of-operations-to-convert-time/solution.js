// Problem: Minimum Number of Operations to Convert Time
// LeetCode: https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/
// Language: javascript
// Runtime: 63 ms
// Memory: 42.5 MB
// Submitted: 2023-05-25

cl = console.log
var convertTime = function (current, correct) {
    let [h1, m1] = current.split(':').map(e => +e)
    let [h2, m2] = correct.split(':').map(e => +e)
    let t1 = h1 * 60 + m1
    let t2 = h2 * 60 + m2
    let gap = t2 - t1
    let an = 0;

    let arr = [60, 15, 5, 1]
    let i = 0
    while (i < arr.length) {
        if (gap >= arr[i]) {
            an += Math.floor(gap / arr[i])
            gap %= arr[i]
        }
        i++;

    }

    return an;
};
