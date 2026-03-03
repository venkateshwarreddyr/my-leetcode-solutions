// Problem: Maximum Width Ramp
// LeetCode: https://leetcode.com/problems/maximum-width-ramp/
// Language: javascript
// Runtime: 14 ms
// Memory: 65.4 MB
// Submitted: 2025-12-25

var maxWidthRamp = function (a) {
    let n = a.length;

    let prefixMin = new Array(n)
    prefixMin[0] = a[0];
    for (let i = 1; i < n; i++) {
        prefixMin[i] = Math.min(prefixMin[i - 1], a[i])
    }

    let suffixMax = new Array(n)
    suffixMax[n - 1] = a[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixMax[i] = Math.max(suffixMax[i + 1], a[i])
    }

    let i = 0, j = 0;
    let width = 0;
    while (i < n && j < n) {
        if (prefixMin[i] <= suffixMax[j]) {
            width = Math.max(width, j - i);
            j++;
        } else {
            i++;
        }
    }

    return width;
};

var maxWidthRamp222222222 = function (a) {
    let n = a.length;
    let max = 0;
    let i, j;

    for (i = 0, j = n - 1; i < j; j--) {
        if (a[i] <= a[j]) {
            max = j - i;
            break;
        }
    }

    i++;

    for (; i < n; i++) {
        for (j = n - 1; j >= i + max; j--) {
            if (a[i] <= a[j]) {
                max = Math.max(max, j - i);
                break;
            }
        }
    }

    return max;
};

