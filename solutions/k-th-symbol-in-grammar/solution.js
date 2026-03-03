// Problem: K-th Symbol in Grammar
// LeetCode: https://leetcode.com/problems/k-th-symbol-in-grammar/
// Language: javascript
// Runtime: 0 ms
// Memory: 53 MB
// Submitted: 2025-12-13

var kthGrammar = function (n, k) {
    let rev = false

    k--
    while (k) {
        if (k & 1) rev = !rev
        k = Math.trunc(k / 2)
    }

    return rev ? 1 : 0
}

var kthGrammar2222 = function (n, k) {
    function fn(n, ki, curr) {
        if (n === 1) return curr
        ki *= 2
        let greater = k >= ki
        if (curr === '0') {
            return fn(n - 1, ki, !greater ? '0' : '1')
        } else {
            return fn(n - 1, ki * 2, greater ? '0' : '1')
        }
    }

    return fn(n, 1, '0')
};

