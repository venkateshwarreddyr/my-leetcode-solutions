// Problem: Complete Prime Number
// LeetCode: https://leetcode.com/problems/complete-prime-number/
// Language: javascript
// Runtime: 2 ms
// Memory: 55.8 MB
// Submitted: 2025-12-06

function primesTill(n) {
  const res = [];
  for (let i = 2; i <= n; i++) {
    let prime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    if (prime) res.push(i);
  }
  return res;
}
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
// var completePrime1 = function (num) {
//     let allPrimes = primesTill(num);
//     let s = num.toString();
//     let prefix = ''
//     let sufix = ''
//     for (let i = 0; i < s.length; i++) {
//         let j = s.length - i - 1
//         prefix+=s[i]
//         sufix =s[j] +sufix
//         if(isPrime(+prefix) && isPrime(+sufix)) continue
//         return false
//     }

//     return true
// };


var completePrime = function (num) {
    let s = num.toString();
    let prefix = ''
    let sufix = ''
    for (let i = 0; i < s.length; i++) {
        let j = s.length - i - 1
        prefix+=s[i]
        sufix =s[j] +sufix
        if(isPrime(+prefix) && isPrime(+sufix)) continue
        return false
    }

    return true
};

