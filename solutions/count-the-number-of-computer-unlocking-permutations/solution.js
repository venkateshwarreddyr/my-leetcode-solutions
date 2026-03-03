// Problem: Count the Number of Computer Unlocking Permutations
// LeetCode: https://leetcode.com/problems/count-the-number-of-computer-unlocking-permutations/
// Language: javascript
// Runtime: 8 ms
// Memory: 68.4 MB
// Submitted: 2026-01-05

function getFactorialModulo(n, MOD) {
    let factorial = 1n;

    for (let i = 2; i <= n; i++) {
        factorial = (factorial * BigInt(i)) % MOD;
    }

    return factorial;
}

function isRootComplexityStrictlySmallest(pwdComplexities) {
    const n = pwdComplexities.length;
    for (let i = 1; i < n; i++) {
        if (pwdComplexities[i] <= pwdComplexities[0]) return false;
    }
    return true;
}

function countPermutations(pwdComplexities) {
    const MOD = 1000000007n;
    const n = pwdComplexities.length;

    if (!isRootComplexityStrictlySmallest(pwdComplexities)) {
        return 0;
    }

    // root is strictly smallest so every order of computers from 1 to n-1 works
    const factorial = getFactorialModulo(n - 1, MOD);
    return Number(factorial);
}

