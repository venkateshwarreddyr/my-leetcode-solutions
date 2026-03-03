// Problem: Earliest Possible Day of Full Bloom
// LeetCode: https://leetcode.com/problems/earliest-possible-day-of-full-bloom/
// Language: javascript
// Runtime: 319 ms
// Memory: 96.5 MB
// Submitted: 2023-07-22

cl = console.log
/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function (plantTime, growTime) {
    let a = []
    for (let i = 0; i < plantTime.length; i++) {
        a.push([plantTime[i], growTime[i]])
    }

    a.sort((a, b) => b[1] - a[1])

    let start = 0
    let an = 0
    for (let [pt, gt] of a) {
        start += pt
        an = Math.max(an, start + gt)
    }

    return an;
};

/**

    4,1,3
    3,2,1




    3,1,4
    1,2,3


 */
