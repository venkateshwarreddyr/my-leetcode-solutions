// Problem: Beautiful Array
// LeetCode: https://leetcode.com/problems/beautiful-array/
// Language: javascript
// Runtime: 8 ms
// Memory: 59.7 MB
// Submitted: 2025-10-21

var beautifulArray = function (n) {
    // For every 0 <= i < j < n
    //  there is no index k with i < k < j
    //      where 2 * nums[k] == nums[i] + nums[j].
    // left + right = 2*mid
    // left + right = even
    // left must be odd, right must be even ==== because of not condition
    const fn = (n) => {
        if (n === 1) return [1]
        let half = Math.trunc(n / 2)
        const left = fn(half + n % 2)
        const right = fn(half)
        // left must be odd, right must be even
        return [
            ...left.map(x => 2 * x - 1),
            ...right.map(x => 2 * x)
        ]
    }
    return fn(n)
};

