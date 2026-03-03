// Problem: Minimum Number of Frogs Croaking
// LeetCode: https://leetcode.com/problems/minimum-number-of-frogs-croaking/
// Language: javascript
// Runtime: 105 ms
// Memory: 44.6 MB
// Submitted: 2023-06-29

cl = console.log
/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (cf) {
    // cf = cf.split("")

    let arr = {
        c: 0,
        r: 0,
        o: 0,
        a: 0,
        k: 0,
    }
    let maxcc = 0

    for (let c of cf) {
        arr[c]++
        if (c === "k") {
            arr["c"]--
            arr["r"]--
            arr["o"]--
            arr["a"]--
            arr["k"]--
        }

        if (arr["c"] < 0 || arr["c"] < arr["r"]) return -1
        if (arr["r"] < 0 || arr["r"] < arr["o"]) return -1
        if (arr["o"] < 0 || arr["o"] < arr["a"]) return -1
        if (arr["a"] < 0 || arr["a"] < arr["k"]) return -1

        maxcc = Math.max(maxcc, arr['c'])
    }
    let set = new Set(Object.values(arr))
    cl(set)
    if (set.size === 1)
        return maxcc
    return -1
};
