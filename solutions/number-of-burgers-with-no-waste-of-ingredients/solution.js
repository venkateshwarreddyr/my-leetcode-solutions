// Problem: Number of Burgers with No Waste of Ingredients
// LeetCode: https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/
// Language: javascript
// Runtime: 0 ms
// Memory: 55 MB
// Submitted: 2026-01-17

var numOfBurgers = function (tomatoSlices, cheeseSlices) {
    // Formula:
    // 1)      1J + 1S = C     => S = C - J
    // 2)    4J + 2S = T
    //    => 4J + 2(C - J) = T
    //             2J = T - 2C
    //              J = (T - 2C) / 2   -------- (3)

    // Jumbo burger count
    // From 3,   J = (T - 2C) / 2
    const numeratorForJumbo = tomatoSlices - 2 * cheeseSlices;
    // no -ve, and no fractional burgers
    if (numeratorForJumbo < 0 || numeratorForJumbo % 2 === 1) {
        return [];
    }
    const jumboCount = numeratorForJumbo / 2;

    // Small burger count
    // From 1,  S = C - J
    const smallCount = cheeseSlices - jumboCount;
    if (smallCount < 0) {
        return [];
    }

    return [jumboCount, smallCount];
};

