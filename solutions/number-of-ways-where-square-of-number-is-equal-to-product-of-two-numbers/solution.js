// Problem: Number of Ways Where Square of Number Is Equal to Product of Two Numbers
// LeetCode: https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/
// Language: javascript
// Runtime: 140 ms
// Memory: 76.1 MB
// Submitted: 2026-01-03

var numTriplets = function (nums1, nums2) {
    function f(nums1, nums2) {
        let m = nums1.length
        let n = nums2.length
        let count = 0
        for (let i = 0; i < m; i++) {
            let x = nums1[i] ** 2
            for (let j = 0; j < n; j++)
                for (let k = j + 1; k < n; k++)
                    if (x === nums2[j] * nums2[k])
                        count++
        }
        return count
    }

    return f(nums1, nums2) + f(nums2, nums1)
};

var numTriplets = function (nums1, nums2) {
    const countPairs = (arr1, arr2) => {
        const freq = {};

        for (let i = 0; i < arr2.length; i++) {
            for (let j = i + 1; j < arr2.length; j++) {
                const prod = arr2[i] * arr2[j];
                freq[prod] = (freq[prod] || 0) + 1;
            }
        }

        let total = 0;
        for (let e of arr1) {
            total += freq[e * e] ?? 0;
        }
        return total;
    };

    return countPairs(nums1, nums2) + countPairs(nums2, nums1);
};

