// Problem: K-th Smallest Prime Fraction
// LeetCode: https://leetcode.com/problems/k-th-smallest-prime-fraction/
// Language: javascript
// Runtime: 806 ms
// Memory: 115.5 MB
// Submitted: 2025-10-29

var kthSmallestPrimeFraction = function (a, k) {
    let n = a.length
    let r = []
    let pq = new PriorityQueue((a, b) => b[0] - a[0])
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let quot = a[i] / a[j]
            pq.enqueue([quot, a[i], a[j]])
            if (pq.size() > k) {
                pq.dequeue()
            }
        }
    }
    let [qu, nu, de] = pq.dequeue()
    return [nu, de]
};

