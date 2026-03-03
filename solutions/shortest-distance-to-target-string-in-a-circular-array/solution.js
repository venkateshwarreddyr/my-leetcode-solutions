// Problem: Shortest Distance to Target String in a Circular Array
// LeetCode: https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/
// Language: javascript
// Runtime: 64 ms
// Memory: 44.6 MB
// Submitted: 2023-05-24

cl = console.log
var closetTarget = function (words, target, startIndex) {
    let n = words.length;
    let i = 0;
    do {
        if (words[(startIndex + i) % n] === target || words[(startIndex - i + n) % n] === target) {
            return i
        }
        i++
    } while (i < n)
    return -1
};
