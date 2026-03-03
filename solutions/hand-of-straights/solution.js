// Problem: Hand of Straights
// LeetCode: https://leetcode.com/problems/hand-of-straights/
// Language: javascript
// Runtime: 113 ms
// Memory: 63.6 MB
// Submitted: 2024-06-06

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
    let ob = {}

    for (let e of hand) {
        ob[e] = ob[e] ?? 0
        ob[e]++
    }
    
    let keys = Object.keys(ob).map(e => +e)
    while (keys.length) {
        if (groupSize > keys.length) return false
        let prev = 0
        let first = ob[keys[0]]
        for (let i = 0; i < groupSize; i++) {
            if (prev) {
                if (prev + 1 !== keys[i]) return false
            }
            prev = keys[i]
            ob[prev]-=first
            if(ob[prev]<0) return false
        }

        while (ob[keys[0]] === 0) {
            keys.shift()
        }
    }

    return true
};
