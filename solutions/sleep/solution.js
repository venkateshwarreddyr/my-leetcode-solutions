// Problem: Sleep
// LeetCode: https://leetcode.com/problems/sleep/
// Language: javascript
// Runtime: 47 ms
// Memory: 41.5 MB
// Submitted: 2023-12-13

/**
 * @param {number} millis
 */
async function sleep(millis) {
    await new Promise((resolve) => setTimeout(resolve, millis))
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
