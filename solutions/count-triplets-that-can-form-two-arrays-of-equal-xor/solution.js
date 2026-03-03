// Problem: Count Triplets That Can Form Two Arrays of Equal XOR
// LeetCode: https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/
// Language: javascript
// Runtime: 43 ms
// Memory: 48.9 MB
// Submitted: 2024-05-30

/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (a) {

    let n = a.length
    let cc = 0;

    for (let i = 0; i < n; i++) {
        let xor = a[i]
        for (let j = i + 1; j < n; j++) {
            xor ^= a[j]
            if (xor == 0) {
                cc += (j - i)
            }
        }
    }

    return cc;
};
