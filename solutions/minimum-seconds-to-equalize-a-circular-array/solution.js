// Problem: Minimum Seconds to Equalize a Circular Array
// LeetCode: https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/
// Language: javascript
// Runtime: 106 ms
// Memory: 93.2 MB
// Submitted: 2026-01-12

const minimumSeconds = function (nums) {
    const n = nums.length
    const mapEleToIndexArr = new Map()
    nums.forEach((e, i) => {
        if (!mapEleToIndexArr.has(e)) mapEleToIndexArr.set(e, [i])
        else mapEleToIndexArr.get(e).push(i)
    })
    let minTime = Infinity
    for (const indexArr of mapEleToIndexArr.values()) {
        const m = indexArr.length
        let maxDiff = 0
        for (let i = 1; i < m; i++) {
            const diff = indexArr[i] - indexArr[i - 1] - 1
            maxDiff = Math.max(maxDiff, diff)
        }
        const lastCircularDiff = n - (indexArr[indexArr.length - 1] - indexArr[0] + 1)
        maxDiff = Math.max(maxDiff, lastCircularDiff)
        minTime = Math.min(minTime, Math.ceil(maxDiff / 2))
    }
    return minTime
}

