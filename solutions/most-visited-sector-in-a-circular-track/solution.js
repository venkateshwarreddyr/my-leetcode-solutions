// Problem: Most Visited Sector in  a Circular Track
// LeetCode: https://leetcode.com/problems/most-visited-sector-in-a-circular-track/
// Language: javascript
// Runtime: 65 ms
// Memory: 41.6 MB
// Submitted: 2023-05-30

cl = console.log;
var mostVisited = function (n, rounds) {
    let start = rounds[0]
    let end = rounds[rounds.length - 1]
    let an = []

    if (start <= end) {
        while (start <= end) {
            an.push(start)
            start++
        }
    } else {
        for (let i = 1; i <= end; i++) an.push(i);
        for (let i = start; i <= n; i++) an.push(i);
    }

    return an;

};

