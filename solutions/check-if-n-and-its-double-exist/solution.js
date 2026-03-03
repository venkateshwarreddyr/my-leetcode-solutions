// Problem: Check If N and Its Double Exist
// LeetCode: https://leetcode.com/problems/check-if-n-and-its-double-exist/
// Language: javascript
// Runtime: 53 ms
// Memory: 42.3 MB
// Submitted: 2023-05-22

cl = console.log
var checkIfExist = function (arr) {
    let n = arr.length;

    // arr.sort((a, b) => b - a);
    let set = new Set();
    let zeros = 0;
    for (let i = 0; i < n; i++) {
        if (set.has(arr[i] / 2) || set.has(arr[i] * 2)) return true
        set.add(arr[i])
    }

    return false;
};
