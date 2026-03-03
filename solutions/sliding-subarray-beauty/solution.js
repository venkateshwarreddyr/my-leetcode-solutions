// Problem: Sliding Subarray Beauty
// LeetCode: https://leetcode.com/problems/sliding-subarray-beauty/
// Language: javascript
// Runtime: 3980 ms
// Memory: 83.9 MB
// Submitted: 2023-04-26

var getSubarrayBeauty = function (a, k, x) {
    let n = a.length;

    let f = {}; // frequency count
    for (let i = -50; i < 0; i++) {
        f[i] = 0;
    }

    let an = [];
    let j = 0;
    for (let i = 0; i < n; i++) {
        f[a[i]]++;
        if (i < k - 1) continue; // skip first k-1 elements

        let c = 0; // count
        let passed = false;
        for (let i2 = -50; i2 < 0; i2++)
            if (f[i2]) {
                c += f[i2]; // add frequency to count
                if (c >= x) {
                    passed = true;
                    if (i2 < 0) an.push(i2);
                    else an.push(0);
                    break;
                }
            }
        if(!passed) an.push(0);
        f[a[j]]--;
        j++;
    }

    return an;
};
