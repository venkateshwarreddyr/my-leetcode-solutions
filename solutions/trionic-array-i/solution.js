// Problem: Trionic Array I
// LeetCode: https://leetcode.com/problems/trionic-array-i/
// Language: javascript
// Runtime: 1 ms
// Memory: 55.7 MB
// Submitted: 2025-10-12

var isTrionic = function (a) {
    let n = a.length;
    let increasing = a[0] < a[1];
    let turnCount = 0;

    for (let i = 1; i + 1 < n; i++) {
        let curr = a[i];
        let next = a[i + 1];

        if (curr === next) return false;

        if (increasing) {
            if (curr < next) {
                // good
            } else {
                if (turnCount === 0) {
                    // 1st time down - good
                    increasing = false;
                    turnCount++;
                } else {
                    // 2nd time down - bad
                    return false;
                }
            }
        } else {
            if (curr > next) {
                // good
            } else {
                if (turnCount === 1) {
                    increasing = true;
                    turnCount++;
                } else {
                    return false;
                }
            }
        }
    }

    return turnCount === 2;
};
