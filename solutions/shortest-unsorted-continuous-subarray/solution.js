// Problem: Shortest Unsorted Continuous Subarray
// LeetCode: https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
// Language: javascript
// Runtime: 3 ms
// Memory: 56.2 MB
// Submitted: 2026-01-03

var findUnsortedSubarray = function (nums) {
    const sortedNums = [...nums].sort((a, b) => a - b);

    let n = nums.length;

    let i = 0;
    while (i < n && nums[i] === sortedNums[i]) i++;

    if (i === n) return 0;

    let j = n - 1;
    while (j > i && nums[j] === sortedNums[j]) j--;

    return j - i + 1;
};

var findUnsortedSubarray = function (nums) {
    const n = nums.length;
    if (n <= 1) return 0;

    let maxLeftSide = -Infinity
    let unsortedEndIndex = -1;
    for (let i = 0; i < n; i++) {
        if (nums[i] >= maxLeftSide) {
            maxLeftSide = nums[i];
        } else {
            unsortedEndIndex = i;
        }
    }
    if (unsortedEndIndex === -1) return 0;

    let minRightSide = Infinity
    let unsortedStartIndex = -1;
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] <= minRightSide) {
            minRightSide = nums[i];
        } else {
            unsortedStartIndex = i;
        }
    }

    return unsortedEndIndex - unsortedStartIndex + 1;
};

var findUnsortedSubarray33333333 = function (a) {
    let n = a.length;
    let s, e;

    for (let i = 0; i < n - 1; i++) {
        if (a[i] > a[i + 1]) {
            s = i;
            for (; i < n; i++) {
                while (s >= 0 && a[i] < a[s]) {
                    s--;
                }
            }
            break;
        }
    }
    if (s === undefined) return 0;

    for (let j = n - 1; j > 0; j--) {
        if (a[j - 1] > a[j]) {
            e = j;
            for (; j >= 0; j--) {
                while (e < n && a[j] > a[e]) {
                    e++;
                }
            }
            break;
        }
    }

    return e - s - 1;
};

