// Problem: Maximum Beauty of an Array After Applying Operation
// LeetCode: https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/
// Language: javascript
// Runtime: 292 ms
// Memory: 56.6 MB
// Submitted: 2023-07-16


cl = console.log
var maximumBeauty = function (a, k) {
    a.sort((a, b) => a - b)
    let n = a.length
    let i = 0, j = 0
    let cc = 0
    let maxcc = 0

    while (j < n) {
        if (a[j] - a[i] <= 2 * k) { // before if(a[j]-a[i]<= k){
        } else {
            i++
        }
        j++


    }

    return j - i
};

