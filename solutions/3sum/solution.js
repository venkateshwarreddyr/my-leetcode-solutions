// Problem: 3Sum
// LeetCode: https://leetcode.com/problems/3sum/
// Language: javascript
// Runtime: 145 ms
// Memory: 59.5 MB
// Submitted: 2023-08-15

function threeSum(nums) {
    let res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let j = i + 1
        let k = nums.length - 1
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum === 0) {
                res.push([nums[i], nums[j], nums[k]])
                while (j < k && nums[j] === nums[j + 1]) j++
                while (j < k && nums[k] === nums[k - 1]) k--
                j++
                k--
            } else if (sum < 0) {
                j++
            } else {
                k--
            }
        }
    }
    return res
}

