// Problem: Random Pick with Weight
// LeetCode: https://leetcode.com/problems/random-pick-with-weight/
// Language: javascript
// Runtime: 34 ms
// Memory: 66.7 MB
// Submitted: 2026-01-17

/**
 * @param {number[]} w
 */
var Solution = function (w) {
    this.runningSums = [];
    this.totalSum = 0;

    for (let weight of w) {
        this.totalSum += weight;
        this.runningSums.push(this.totalSum);
    }

    Solution.prototype.pickIndex = function () {
        const random = Math.floor(Math.random() * this.totalSum) + 1;
        let low = 0, high = this.runningSums.length;

        while (low < high) {
            let mid = low + Math.floor((high - low) / 2);
            if (random > this.runningSums[mid]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        return low;
    };
};


