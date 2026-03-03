// Problem: Largest Prime from Consecutive Prime Sum
// LeetCode: https://leetcode.com/problems/largest-prime-from-consecutive-prime-sum/
// Language: javascript
// Runtime: 1 ms
// Memory: 62.4 MB
// Submitted: 2025-12-09

var getPrimesTill_sieveOfEratosthenes = (n) => {
    const isPrimeArr = new Array(n + 1).fill(true);
    isPrimeArr[0] = isPrimeArr[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (isPrimeArr[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrimeArr[j] = false;
            }
        }
    }

    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrimeArr[i]) primes.push(i);
    }

    return { isPrimeArr, primes };
};

const { isPrimeArr, primes } =
    getPrimesTill_sieveOfEratosthenes(5 * 10 ** 5 + 1);

var largestPrime = function (n) {
    let res = 0;
    let sum = 0;

    for (const prime of primes) {
        sum += prime;
        if (sum > n) break;
        if (isPrimeArr[sum]) {
            res = sum;
        }
    }

    return res;
};


function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

var largestPrime2222 = function (n) {
    if (n === 1) return 0;

    let sum = 0;
    let ans = 0;
    for (let i = 2; sum <= n; i++) {
        let prime = true;
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            if (isPrime(sum)) ans = sum;
            sum += i;
        }
    }
    return ans;
};

