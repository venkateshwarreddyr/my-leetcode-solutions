// Problem: Minimum Equal Sum of Two Arrays After Replacing Zeros
// LeetCode: https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/
// Language: javascript
// Runtime: 253 ms
// Memory: 59.6 MB
// Submitted: 2023-10-31

cl = console.log
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function (a, b) {
    a.sort((a, b) => a - b)
    b.sort((a, b) => a - b)

    let suma = 0, cca = 0
    let sumb = 0, ccb = 0

    for (let e of a) {
        if (e === 0) cca++
        suma += e
    }

    for (let e of b) {
        if (e === 0) ccb++
        sumb += e
    }


    if (!cca && suma < sumb + ccb) return -1
    if (!ccb && sumb < suma + cca) return -1

    return Math.max(suma + cca, sumb + ccb)

    // if ((cca && !ccb) || (!cca && ccb)) {
    //     if (suma === sumb) return sumb
    //     return -1
    // }

    // if (cca > ccb) {
    //     if (suma > sumb) {
    //         return suma + cca
    //     } else if (suma < sumb) {
    //         return sumb + ccb
    //     } else {
    //         return suma + Math.max(cca, ccb)
    //     }
    // } else {
    //     if (suma > sumb) {
    //         return suma + cca
    //     } else if (suma < sumb) {
    //         return sumb + ccb
    //     } else {
    //         return suma + Math.max(cca, ccb)
    //     }
    // }

};
