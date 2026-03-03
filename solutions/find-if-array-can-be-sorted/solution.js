// Problem: Find if Array Can Be Sorted
// LeetCode: https://leetcode.com/problems/find-if-array-can-be-sorted/
// Language: javascript
// Runtime: 2 ms
// Memory: 57.3 MB
// Submitted: 2025-10-24

const popCount = n => {
    let count = 0;
    for (; n; n >>= 1) count += n & 1;
    return count;
};

var canSortArray = function (a) {
    let prevMaxOfGroup = -Infinity;
    let oneCount = popCount(a[0]);
    let minOfGroup = a[0];
    let maxOfGroup = a[0];
    for (let i = 1; i < a.length; i++) {
        let e = a[i];
        if (popCount(e) === oneCount) {
            minOfGroup = Math.min(minOfGroup, e);
            maxOfGroup = Math.max(maxOfGroup, e);
        } else {
            if (prevMaxOfGroup <= minOfGroup) {
                // good
            } else return false;

            prevMaxOfGroup = maxOfGroup;
            oneCount = popCount(e);
            minOfGroup = e;
            maxOfGroup = e;
        }
    }
    if (prevMaxOfGroup <= minOfGroup) {
        // good
        return true;
    } else return false;
};

