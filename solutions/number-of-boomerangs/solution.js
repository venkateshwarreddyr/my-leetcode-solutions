// Problem: Number of Boomerangs
// LeetCode: https://leetcode.com/problems/number-of-boomerangs/
// Language: javascript
// Runtime: 133 ms
// Memory: 61.4 MB
// Submitted: 2026-01-17

const distance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

var numberOfBoomerangs = function (points) {
    // points.sort((a, b) => a[0] - b[0])

    let n = points.length
    let count = 0
    for (let i = 0; i < n; i++) {
        let [curr_x, curr_y] = points[i]
        let map = new Map()
        for (let j = 0; j < n; j++) {
            let [left_x, left_y] = points[j]
            let d = distance(curr_x, curr_y, left_x, left_y)
            map.set(d, (map.get(d) ?? 0) + 1)
        }

        for (let val of map.values()) {
            count += ((val - 1) * val)
        }

    }

    return count
};
