// Problem: Maximum Value of an Ordered Triplet II
// LeetCode: https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/
// Language: javascript
// Runtime: 18 ms
// Memory: 79.1 MB
// Submitted: 2025-12-13

var maximumTripletValue = function (nums) {
    let a = nums
    let n = nums.length

    // i < j < k
    // (nums[i] - nums[j])  *  nums[k]   shud be max
    // (nums[i] - nums[j])    and    nums[k]   shud be max
    // (nums[i] shud be max - nums[j] shud be min)    and    nums[k]   shud be max

    let lMax = -Infinity
    let rMax = -Infinity
    let prefixMaxArr = []
    let posfixtMaxArr = []
    for (let i = 0; i < n; i++) {
        lMax = Math.max(lMax, a[i])
        prefixMaxArr.push(lMax)

        rMax = Math.max(rMax, a[n - 1 - i])
        posfixtMaxArr.push(rMax)
    }
    posfixtMaxArr.reverse()

    let max = 0
    for (let j = 1; j < n - 1; j++) {
        max = Math.max(max,
            (prefixMaxArr[j - 1] - a[j]) * posfixtMaxArr[j + 1]
        )
    }

    return max
};

var maximumTripletValue22222222 = function (nums) {
    let n = nums.length
    let max = 0
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                max = Math.max(max, (nums[i] - nums[j]) * nums[k])
            }
        }
    }

    return max
};
