// Problem: Eat Pizzas!
// LeetCode: https://leetcode.com/problems/eat-pizzas/
// Language: javascript
// Runtime: 272 ms
// Memory: 85 MB
// Submitted: 2026-01-06

var maxWeight = function (a) {
    let sum = 0
    let n = a.length

    let days = n / 4
    let oddDays = Math.ceil(days / 2)
    let evenDays = days - oddDays
    a.sort((a, b) => a - b)

    while (oddDays--) {
        sum += a.pop()
    }
    while (evenDays--) {
        a.pop()
        sum += a.pop()
    }

    return sum
};

