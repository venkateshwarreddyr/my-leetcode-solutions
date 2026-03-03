// Problem: Find Kth Bit in Nth Binary String
// LeetCode: https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/
// Language: javascript
// Runtime: 724 ms
// Memory: 121.4 MB
// Submitted: 2023-07-10

cl = console.log
/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {

    function fn(s, n) {
        if (n === 0) return s

        return fn(s + "1" + s.split("").map(e => +e ? 0 : 1).reverse().join(""), n - 1)
    }

    let an = fn("0", n - 1)
    return an[k - 1]
};
