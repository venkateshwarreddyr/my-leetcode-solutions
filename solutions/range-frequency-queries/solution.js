// Problem: Range Frequency Queries
// LeetCode: https://leetcode.com/problems/range-frequency-queries/
// Language: javascript
// Runtime: 124 ms
// Memory: 102.5 MB
// Submitted: 2025-12-19


function lower_bound_eg(arr, target, L = 0, R = arr.length) {
    while (L < R) {
        let mid = ~~(L / 2 + R / 2);

        arr[mid] < target ? (L = mid + 1) : (R = mid);
    }

    return L;
}

function upper_bound_g(arr, target, L = 0, R = arr.length) {
    while (L < R) {
        let mid = ~~(L / 2 + R / 2);

        arr[mid] <= target ? (L = mid + 1) : (R = mid);
    }

    return L;
}

var RangeFreqQuery = function (arr) {
    this.ob = {}
    let ob = this.ob
    let n = arr.length
    for (let i = 0; i < n; i++) {
        let val = arr[i]
        ob[val] = ob[val] ?? []
        ob[val].push(i)
    }
};

RangeFreqQuery.prototype.query = function (left, right, value) {
    let indexArr = this.ob[value] ?? []
    return upper_bound_g(indexArr, right) - lower_bound_eg(indexArr, left)
};


