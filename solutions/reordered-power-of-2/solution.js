// Problem: Reordered Power of 2
// LeetCode: https://leetcode.com/problems/reordered-power-of-2/
// Language: javascript
// Runtime: 3 ms
// Memory: 55.5 MB
// Submitted: 2025-08-10

cl = console.log
/**
 * @param {number} n
 * @return {boolean}
 */


var reorderedPowerOf2 = function (n) {
    let s = n.toString()
    let a = []
    let p2 = [
        1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096,
        8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576,
        2097152, 4194304, 8388608, 16777216, 33554432, 67108864, 134217728,
        268435456, 536870912, 1073741824,
    ]

    let ns = ("" + n).split("").sort().join("")
    for (let e of p2) {
        e = e.toString().split("").sort().join("")
        if (ns === e) {
            return true
        }
        if (e.length > ns.length)
            return false;
    }
    return false
};
