// Problem: Binary Watch
// LeetCode: https://leetcode.com/problems/binary-watch/
// Language: javascript
// Runtime: 61 ms
// Memory: 44.5 MB
// Submitted: 2023-05-28

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (t) {
    let an = []
    for (let i = 0; i <= 1440; i++) {
        let hours = Math.floor(i / 60)
        let minutes = i % 60

        if (hours < 12 && (hours.toString(2) + minutes.toString(2)).replaceAll("0", "").length === t) {
            an.push(`${hours}:${minutes < 10 ? '0' + minutes : minutes}`)
        }
    }

    return an;
};
