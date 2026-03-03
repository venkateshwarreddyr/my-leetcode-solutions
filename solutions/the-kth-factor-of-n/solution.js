// Problem: The kth Factor of n
// LeetCode: https://leetcode.com/problems/the-kth-factor-of-n/
// Language: javascript
// Runtime: 65 ms
// Memory: 42.4 MB
// Submitted: 2023-07-10

var kthFactor = function (n, k) {
    function factor(i, factorsTillNow) {
        if (factorsTillNow === k) return i //    kth factor
        i++ // check next factor
        if (i > n) return -1 //        factor cannot be greater than n - no factors
        let l = -1, r = -1 // assume no factors
        if (n % i === 0) {
            l = factor(i, factorsTillNow + 1) // factor found - reduce factors+1
        } else {
            r = factor(i, factorsTillNow)
        }
        return Math.max(l, r)
    }



    return factor(0, 0) // start with factor as 1,   0 factorsTillNow
    // return factor(1,   1) // start with factor as 1,   1 factorsTillNow
}
