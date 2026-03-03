// Problem: Prime Arrangements
// LeetCode: https://leetcode.com/problems/prime-arrangements/
// Language: javascript
// Runtime: 69 ms
// Memory: 42.4 MB
// Submitted: 2023-06-01

cl = console.log
const mod = 10 ** 9 + 7;

var numPrimeArrangements = function (n) {
    let primeCount = 0
    let nonprimeCount = 0
    for (let i = 1; i <= n; i++) {
        let cc = 0
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                cc++
            }
        }

        if (cc === 2) {
            primeCount++
        } else {
            nonprimeCount++
        }
    }

    let an = 1
    while (primeCount) {
        an *= primeCount
        primeCount--;
        an %= mod
    }

    while (nonprimeCount) {
        an *= nonprimeCount
        nonprimeCount--;
        an %= mod
    }

    return an
};
