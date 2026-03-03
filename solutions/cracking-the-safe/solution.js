// Problem: Cracking the Safe
// LeetCode: https://leetcode.com/problems/cracking-the-safe/
// Language: javascript
// Runtime: 66 ms
// Memory: 49.2 MB
// Submitted: 2023-08-26

var crackSafe = (n, k) => {
  const dfs = (set) => {
    if (set.size === total) return

    let lastNMinusOneDigits = result.slice(result.length - n + 1) // Last n-1 digits

    for (let i = k - 1; i >= 0; i--) {
      let newCombination = lastNMinusOneDigits + i

      if (set.has(newCombination)) continue

      set.add(newCombination)
      result += i
      dfs(set)
    }
  }

  let total = k ** n
  let result = '0'.repeat(n)
  let set = new Set([result])

  dfs(set)
  return result
}
