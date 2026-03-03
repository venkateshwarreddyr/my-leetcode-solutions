// Problem: Next Permutation
// LeetCode: https://leetcode.com/problems/next-permutation/
// Language: javascript
// Runtime: 1 ms
// Memory: 58 MB
// Submitted: 2025-10-29

function next_permutation(a) {
    // 51 3542
    // 51 35 42      increasing - find pivot(3),i -> a[i]<a[j]
    // 51 3*5 4*2    3<4        -> a[i]<a[j]
    // 51 4*5 3*2    swap i & j
    // 51 4*235      right side of i, sort
    let n = a.length
    let i
    for (i = n - 2; i >= 0; i--) {
        // i, i+1
        if (a[i] < a[i + 1]) {
            break
        }
    }
    if (i >= 0) {
        for (let j = n - 1; j > i; j--) {
            if (a[i] < a[j]) {
                [a[j], a[i]] = [a[i], a[j]]
                break
            }
        }
    }
    return [...a.slice(0, i + 1), ...a.slice(i + 1).sort((a, b) => a - b)]
}

var nextPermutation = function (a) {
    let b = next_permutation(a)
    b.forEach((x, i) => a[i] = x)
    return a
};

