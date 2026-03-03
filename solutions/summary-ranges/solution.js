// Problem: Summary Ranges
// LeetCode: https://leetcode.com/problems/summary-ranges/
// Language: javascript
// Runtime: 58 ms
// Memory: 42.5 MB
// Submitted: 2023-05-27

cl = console.log
var summaryRanges = function (a) {
    let n = a.length;

    let an = []
    let i = 0; j = 1
    let first = a[0]
    let last = a[0]
    while (i < n) {
        if (a[j - 1] + 1 !== a[j]) {
            cl({ i, j })
            last = a[j - 1]
            if (first === last) {
                an.push('' + first)
            } else {
                an.push(first + '->' + last)
            }
            i = j
            first = last = a[j]
        }
        j++
    }


    return an;
};
