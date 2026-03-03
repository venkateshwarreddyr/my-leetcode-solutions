// Problem: Alice and Bob Playing Flower Game
// LeetCode: https://leetcode.com/problems/alice-and-bob-playing-flower-game/
// Language: javascript
// Runtime: 3 ms
// Memory: 57.2 MB
// Submitted: 2025-12-27

var flowerGame = function (n, m) {
    let res = 0; // winning pairs

    const evenYCount = Math.floor(m / 2); // [1, m]
    const oddYCount = Math.ceil(m / 2); // [1, m]

    // for alice to win, sum of x & y in pair, should be odd (last to pick)

    for (let x = 1; x <= n; x++) {
        if (x % 2 === 0)
            res += oddYCount; // x even => y must be odd
        else res += evenYCount;
    }

    return res;
};

