// Problem: 4Sum
// LeetCode: https://leetcode.com/problems/4sum/
// Language: javascript
// Runtime: 13 ms
// Memory: 57.4 MB
// Submitted: 2025-12-25

function binary_search(arr, target, L = 0, R = arr.length - 1) {
    while (L < R) {
        let mid = ~~(L / 2 + R / 2);
        arr[mid] < target ? (L = mid + 1) : (R = mid);
    }
    return L === R && arr[L] === target ? L : -1;
}

var fourSum222222222 = function (a, targetSum) {
    let n = a.length;

    a.sort((a, b) => a - b);

    //   L + R                   + L2 + R2 = targetSum
    //   L + R - targetSum          + L2      = - R2
    // -(L + R - targetSum          + L2)     =   R2
    // (a[L] + a[R]) - targetSum
    let res = [];
    for (let L = 0; L < n; L++) {
        if (L > 0 && a[L - 1] === a[L]) continue;

        for (let R = L + 1; R < n; R++) {
            if (R > L + 1 && a[R - 1] === a[R]) continue;

            let sum1 = (a[L] + a[R]) - targetSum;

            for (let L2 = R + 1; L2 < n; L2++) {
                if (L2 > R + 1 && a[L2 - 1] === a[L2]) continue;

                let targetR2 = -(sum1 + a[L2]); // R2
                let R2 = binary_search(a, targetR2, L2 + 1, n - 1);
                if (R2 !== -1) {
                    res.push([a[L], a[R], a[L2], a[R2]]);
                }
            }
        }
    }
    return res;
};

var fourSum = function (a, targetSum) {
    let n = a.length;

    a.sort((a, b) => a - b);

    // L + R + L2 + R2 = targetSum
    let res = [];
    for (let L = 0; L < n; L++) {
        for (let R = L + 1; R < n; R++) {
            let sum = a[L] + a[R] - targetSum;
            let targetL2R2 = -sum; // targetSum;

            for (let L2 = R + 1, R2 = n - 1; L2 < R2;) {
                let sum2 = a[L2] + a[R2];

                if (sum2 === targetL2R2) {
                    res.push([a[L], a[R], a[L2], a[R2]]);

                    while (L2 < R2 && a[L2] === a[L2 + 1]) L2++;
                    while (R2 > L2 && a[R2] === a[R2 - 1]) R2--;
                    L2++;
                    R2--;
                } else if (sum2 < targetL2R2) {
                    L2++;
                } else {
                    R2--;
                }
            }
            while (a[R] === a[R + 1]) R++;
        }
        while (a[L] === a[L + 1]) L++;
    }
    return res;
};

