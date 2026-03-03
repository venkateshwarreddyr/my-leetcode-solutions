// Problem: Count Lattice Points Inside a Circle
// LeetCode: https://leetcode.com/problems/count-lattice-points-inside-a-circle/
// Language: javascript
// Runtime: 798 ms
// Memory: 73.7 MB
// Submitted: 2026-01-17

var countLatticePoints = function (circles) {
    const dist = (x1, y1, x2, y2) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    let set = new Set();

    for (let [x, y, r] of circles) {
        for (let i = 0; i <= r; i++) {
            for (let j = 0; j <= r; j++) {
                if (dist(x, y, x + i, y + j) <= r) set.add(x + i + "," + (y + j));
                if (dist(x, y, x + i, y - j) <= r) set.add(x + i + "," + (y - j));
                if (dist(x, y, x - i, y + j) <= r) set.add(x - i + "," + (y + j));
                if (dist(x, y, x - i, y - j) <= r) set.add(x - i + "," + (y - j));
            }
        }
    }

    return set.size;
};

