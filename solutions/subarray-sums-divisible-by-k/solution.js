// Problem: Subarray Sums Divisible by K
// LeetCode: https://leetcode.com/problems/subarray-sums-divisible-by-k/
// Language: javascript
// Runtime: 109 ms
// Memory: 60.1 MB
// Submitted: 2024-06-09

cl = console.log
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (A, k) {
    let cc = 0;

    let ob = {}
    ob[0] = 1
    let s = 0;

    for (let e of A) {
        e = (e % k + k)// due to -ve numbers

        s += e % k;
        s %= k;
        ob[s] = (ob[s] ?? 0)
        cc += ob[s];
        ob[s]++
    }
    cl(ob)
    return cc;
};
