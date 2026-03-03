// Problem: Count Pairs of Points With Distance k
// LeetCode: https://leetcode.com/problems/count-pairs-of-points-with-distance-k/
// Language: javascript
// Runtime: 1095 ms
// Memory: 70.6 MB
// Submitted: 2023-09-20

/**
 * @param {number[][]} coordinates
 * @param {number} k
 * @return {number}
 */
var countPairs = function (coordinates, k) {
    let cc = 0
    let map = {}

    for (let e of coordinates) {
        let str = JSON.stringify(e)
        map[str] = map[str] || 0
        map[str]++
    }
    coordinates = Object.keys(map).map(e => JSON.parse(e))
    let n = coordinates.length

    for (let i = 0; i < n; i++) {
        let [x1, y1] = coordinates[i]
        let str = JSON.stringify([x1, y1])
        if (map[str] > 1) {
            if ((x1 ^ x1) + (y1 ^ y1) === k) {
                cc += (map[str] * (map[str] - 1) / 2)
            }
        }
        for (let j = i + 1; j < n; j++) {
            let [x2, y2] = coordinates[j]
            if ((x1 ^ x2) + (y1 ^ y2) === k) {
                cc += (map[str] * map[JSON.stringify([x2, y2])])
            }
        }
    }

    return cc
};
