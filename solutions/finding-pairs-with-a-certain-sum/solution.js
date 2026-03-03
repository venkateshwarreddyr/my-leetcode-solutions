// Problem: Finding Pairs With a Certain Sum
// LeetCode: https://leetcode.com/problems/finding-pairs-with-a-certain-sum/
// Language: javascript
// Runtime: 98 ms
// Memory: 80.2 MB
// Submitted: 2025-11-24

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function (nums1, nums2) {
    const freq = new Map();


    for (let num of nums2) {
        freq.set(num, (freq.get(num) ?? 0) + 1);
    }

    FindSumPairs.prototype.add = function (index, val) {
        const oldVal = nums2[index];
        const newVal = oldVal + val;


        freq.set(oldVal, freq.get(oldVal) - 1);


        freq.set(newVal, (freq.get(newVal) ?? 0) + 1);


        nums2[index] = newVal;
    };

    FindSumPairs.prototype.count = function (tot) {
        let ans = 0;

        for (let num of nums1) {
            const need = tot - num;
            if (freq.has(need)) ans += freq.get(need);
        }

        return ans;
    };
};

