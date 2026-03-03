// Problem: Degree of an Array
// LeetCode: https://leetcode.com/problems/degree-of-an-array/
// Language: javascript
// Runtime: 92 ms
// Memory: 46.4 MB
// Submitted: 2023-05-30

cl = console.log
var findShortestSubArray = function (a) {
    let n = a.length;

    let ob = {};
    for (let e of a) {
        ob[e] = ob[e] || 0;
        ob[e]++;
    }

    let maxDegConstant = Math.max(...Object.values(ob))

    let start = 0;
    let ob1 = {};
    let an = Infinity
    for (let i = 0; i < n; i++) {
        ob1[a[i]] = ob1[a[i]] || 0;
        ob1[a[i]]++;
        while (ob1[a[i]] === maxDegConstant && start <= i) {
            an = Math.min(i - start + 1, an)
            ob1[a[start]]--
            start++
        }
    }

    return an;
};
