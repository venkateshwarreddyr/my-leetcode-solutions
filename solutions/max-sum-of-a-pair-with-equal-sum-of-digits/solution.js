// Problem: Max Sum of a Pair With Equal Sum of Digits
// LeetCode: https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/
// Language: javascript
// Runtime: 25 ms
// Memory: 72.3 MB
// Submitted: 2025-10-29

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (a) {
    let ob = {}
    let an = []

    for (let e of a) {
        let digitSum = 0
        let num = e
        while (num) {
            const d = num % 10
            digitSum += d

            num = Math.floor(num / 10)
        }

        if (ob[digitSum]) {
            an.push(e + ob[digitSum])
            ob[digitSum] = Math.max(e, ob[digitSum])
        } else {
            ob[digitSum] = e
        }
    }

    return Math.max(-1, ...an)
};
