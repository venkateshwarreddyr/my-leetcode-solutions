// Problem: Count Special Triplets
// LeetCode: https://leetcode.com/problems/count-special-triplets/
// Language: javascript
// Runtime: 271 ms
// Memory: 94.2 MB
// Submitted: 2025-12-09

let MOD = 10 ** 9 + 7
var specialTriplets = function (nums) {
    let n = nums.length

    let postMap = new Map()

    for (let num of nums) {
        postMap.set(num, (postMap.get(num) ?? 0) + 1)
    }

    let preMap = new Map()

    let count = 0
    for (let num of nums) {
        postMap.set(num, postMap.get(num) - 1)
        let preCount = preMap.get(2 * num) ?? 0
        let postCount = postMap.get(2 * num) ?? 0
        count += ((preCount * postCount))
        count %= MOD
        preMap.set(num, (preMap.get(num) ?? 0) + 1)
    }

    return count
};
