// Problem: X of a Kind in a Deck of Cards
// LeetCode: https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/
// Language: javascript
// Runtime: 66 ms
// Memory: 44.3 MB
// Submitted: 2023-05-29

function gcd(a, b) {
  if (a === 0) return b;
  return gcd(b % a, a)
}
function gcdOfArray(a) {
  let x = gcd(a[0], a[0])
  for (let i = 1; i < a.length; i++) {
    x = gcd(a[i], x);
  }

  return x;
}

var hasGroupsSizeX = function (deck) {
  let obj = {}

  for (let d of deck) {
    obj[d] = obj[d] || 0
    obj[d]++
  }

  return gcdOfArray(Object.values(obj)) > 1
};
