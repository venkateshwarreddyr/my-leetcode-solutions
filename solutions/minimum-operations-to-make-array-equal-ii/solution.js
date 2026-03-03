// Problem: Minimum Operations to Make Array Equal II
// LeetCode: https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/
// Language: javascript
// Runtime: 109 ms
// Memory: 57.3 MB
// Submitted: 2023-06-08

cl = console.log
var minOperations = function (a, b, k) {
     if(k===0){
        return a.toString() === b.toString() ? 0 : -1
    }
    let add = 0
    let sub = 0
    let n = a.length
    let cc = []
    for (let i = 0; i < n; i++) {
        if (a[i] > b[i]) {
            add += (a[i] - b[i])
        } else if (a[i] < b[i]) {
            sub += (b[i] - a[i])
        }
        cc.push(a[i] - b[i])
    }
    let an = cc.reduce((a, c) => {
        return (c % k === 0) && a
    }, true)

    if (an && sub === add) {
        return sub / k
    }

    return -1;
};


