// Problem: Distribute Candies Among Children II
// LeetCode: https://leetcode.com/problems/distribute-candies-among-children-ii/
// Language: javascript
// Runtime: 55 ms
// Memory: 53.9 MB
// Submitted: 2025-12-10

function numOfWays3CanDivide(n) {
    if (n < 0) return 0
    return (n + 1) * (n + 2) / 2
}

var distributeCandies = function (n, limit) {
    // U (all ways   without using  limit)
    let totalWithoutLimit = numOfWays3CanDivide(n)

    // Outer (invalid ways  using  limit  )
    let invalidLimit = limit + 1
    let onePersonInvalidWays = 3 * numOfWays3CanDivide(n - invalidLimit)
    let twoPersonInvalidWays = 3 * numOfWays3CanDivide(n - 2 * invalidLimit)
    let threePersonInvalidWays = 1 * numOfWays3CanDivide(n - 3 * invalidLimit)
    let totalInvalidWays = onePersonInvalidWays - twoPersonInvalidWays + threePersonInvalidWays

    return totalWithoutLimit - totalInvalidWays
};

