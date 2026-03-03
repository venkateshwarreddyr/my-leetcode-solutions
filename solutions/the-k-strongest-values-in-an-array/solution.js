// Problem: The k Strongest Values in an Array
// LeetCode: https://leetcode.com/problems/the-k-strongest-values-in-an-array/
// Language: javascript
// Runtime: 272 ms
// Memory: 65.3 MB
// Submitted: 2023-08-07

function getStrongest(A, k) {
    A.sort((a, b) => a - b);
    const m = A[Math.floor((A.length - 1) / 2)];
    A.sort((a, b) => {
        return Math.abs(a - m) === Math.abs(b - m) ? (a > b ? -1 : 1) : (Math.abs(a - m) > Math.abs(b - m) ? -1 : 1);
    });
    const ans = A.slice(0, k);
    return ans;
}
