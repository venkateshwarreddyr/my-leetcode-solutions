// Problem: Minimum XOR Sum of Two Arrays
// LeetCode: https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/
// Language: javascript
// Runtime: 53 ms
// Memory: 60.8 MB
// Submitted: 2025-09-15

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumXORSum = function (nums1, nums2) {
    let n = nums1.length

    let memo = Array.from({ length: n }, () => ({}))
    const _dfs = (i, mask) => {
        if (i === n) return 0
        if (memo[i][mask] !== undefined) return memo[i][mask]

        let minxorsum = Infinity
        for (let j = 0; j < n; j++) {
            if ((1 << j & mask) !== 0) continue
            const new_mask = mask | (1 << j);
            const new_xor = nums1[i] ^ nums2[j]
            minxorsum = Math.min(
                minxorsum,
                new_xor + _dfs(i + 1, new_mask)
            )
        }

        memo[i][mask] = minxorsum

        return minxorsum
    }



    return _dfs(0, 0)
};
