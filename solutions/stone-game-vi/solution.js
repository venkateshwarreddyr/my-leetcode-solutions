// Problem: Stone Game VI
// LeetCode: https://leetcode.com/problems/stone-game-vi/
// Language: javascript
// Runtime: 169 ms
// Memory: 82.7 MB
// Submitted: 2025-12-27

function stoneGameVI(aliceStoneValues, bobStoneValues) {
    const a =
        aliceStoneValues
            .map((_, i) => ({ sum: aliceStoneValues[i] + bobStoneValues[i], idx: i }))
            .sort((a, b) => b.sum - a.sum);

    let points1 = 0;
    let points2 = 0;

    a.forEach(({ idx }, i) => {
        if (i % 2 === 0) points1 += aliceStoneValues[idx];
        else points2 += bobStoneValues[idx];
    });

    return Math.sign(points1 - points2)
}

