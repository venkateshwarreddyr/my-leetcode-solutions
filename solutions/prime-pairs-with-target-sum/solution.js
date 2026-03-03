// Problem: Prime Pairs With Target Sum
// LeetCode: https://leetcode.com/problems/prime-pairs-with-target-sum/
// Language: javascript
// Runtime: 4360 ms
// Memory: 58.9 MB
// Submitted: 2023-07-02

function isPrime(n) {
  if (n < 2) {
    return 0
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return 0
    }
  }
  return 1
}

var findPrimePairs = function(n) {
    let a = []
    for (let i=1; i<=Math.trunc(n/2); i++) {
        let s = n - i
        if (isPrime(i) && isPrime(s)) {
            a.push([i,s])
        }
    }
    return a.sort((a,b)=> a[0]-b[0] || a[1]-b[1])
};
