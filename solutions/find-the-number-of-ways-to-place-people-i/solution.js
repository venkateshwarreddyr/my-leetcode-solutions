// Problem: Find the Number of Ways to Place People I
// LeetCode: https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/
// Language: javascript
// Runtime: 46 ms
// Memory: 64.3 MB
// Submitted: 2025-11-11

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function (points) {
    points.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

    console.log(points)

    let ans = 0;

    for (let i = 0; i < points.length; i++) {
        let maxY = -Infinity;

        for (let j = i + 1; j < points.length; j++) {
            let y = points[j][1];

            if (y <= points[i][1] && y > maxY) {
                ans++;
                maxY = y;
            }
        }
    }

    return ans;
};
