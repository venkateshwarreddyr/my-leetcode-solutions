// Problem: Magnetic Force Between Two Balls
// LeetCode: https://leetcode.com/problems/magnetic-force-between-two-balls/
// Language: javascript
// Runtime: 139 ms
// Memory: 65.5 MB
// Submitted: 2025-11-03

/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    position.sort((a, b) => a - b);

    let head = 1;
    let tail = position[position.length - 1];

    function good(x) {
        let start = -1e100;
        let count = 0;

        for (const p of position) {
            if (p - start >= x) {
                start = p;
                count++;
            }
        }
        return count >= m;
    }

    while (head < tail) {
        const mid = Math.floor((head + tail) / 2);
        if (good(mid + 1)) {
            head = mid + 1;
        } else {
            tail = mid;
        }
    }

    return head;
};

