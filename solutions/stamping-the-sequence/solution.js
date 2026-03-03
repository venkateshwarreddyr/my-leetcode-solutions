// Problem: Stamping The Sequence
// LeetCode: https://leetcode.com/problems/stamping-the-sequence/
// Language: javascript
// Runtime: 94 ms
// Memory: 47.1 MB
// Submitted: 2023-10-05

cl = console.log
/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function (stamp, target) {

    if (stamp === target) return [0]
    let n = target.length
    let m = stamp.length
    let an = []

    target = target.split("")
    let prev = null
    while (true) {
        OUTER:
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (target[i + j] === "*") continue
                if (target[i + j] !== stamp[j]) {
                    continue OUTER
                }
            }

            an.unshift(i)
            for (let j = 0; j < m; j++) {
                target[i + j] = "*"
            }

        }
        let x = target.join("")
        if (prev === x) {
            return []
        }
        prev = x
        if (!target.join("").replaceAll("*", "")) {
            break
        }
    }


    return an;
};

/**

a a b c a

 */
