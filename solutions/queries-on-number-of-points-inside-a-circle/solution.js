// Problem: Queries on Number of Points Inside a Circle
// LeetCode: https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/
// Language: javascript
// Runtime: 121 ms
// Memory: 49 MB
// Submitted: 2023-06-16

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
    let an = []
    for (let [x1, y1, r] of queries) {
        let c = 0
        for (let [x2, y2] of points) {
            let x = x2 - x1
            let y = y2 - y1
            let d = Math.sqrt(x * x + y * y)
            if (d <= r) {
                c++;
            }
        }
        an.push(c)
    }

    return an;
};

// (1, 3)(2, 3)(3, 3)

//     (2, 2)

// 1, 1
