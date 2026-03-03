// Problem: Matchsticks to Square
// LeetCode: https://leetcode.com/problems/matchsticks-to-square/
// Language: javascript
// Runtime: 26 ms
// Memory: 56 MB
// Submitted: 2026-01-03

var makesquare = function (matchstickLens) {
    const n = matchstickLens.length;

    let sum = matchstickLens.reduce((sum, x) => sum + x);
    const quarter = sum / 4;
    if (quarter % 1 !== 0) return false;

    matchstickLens.sort((a, b) => b - a);
    let sides = [quarter, quarter, quarter, quarter];
    return bt(0);

    function bt(i) {
        if (sides[0] < 0 || sides[1] < 0 || sides[2] < 0 || sides[3] < 0) return false;
        if (i === n) return sides[0] === 0 && sides[1] === 0 && sides[2] === 0 && sides[3] === 0;

        const currLen = matchstickLens[i];
        for (let j = 0; j < 4; j++) {
            sides[j] -= currLen;
            if (bt(i + 1)) return true;
            sides[j] += currLen;
            if (sides[j] === quarter) break; // ?
        }
        return false;
    }
};

var makesquare2222 = function (matchstickLens) {
    const n = matchstickLens.length;

    let sum = matchstickLens.reduce((sum, x) => sum + x);
    const quarter = sum / 4;
    if (quarter % 1 !== 0) return false;

    matchstickLens.sort((a, b) => b - a);
    return bt(0, quarter, quarter, quarter, quarter);

    function bt(i, side1, side2, side3, side4) {
        if (side1 < 0 || side2 < 0 || side3 < 0 || side4 < 0) return false;
        if (i === n) return side1 === 0 && side2 === 0 && side3 === 0 && side4 === 0;

        const currLen = matchstickLens[i];
        return (
            bt(i + 1, side1 - currLen, side2, side3, side4) ||
            bt(i + 1, side1, side2 - currLen, side3, side4) ||
            bt(i + 1, side1, side2, side3 - currLen, side4) ||
            bt(i + 1, side1, side2, side3, side4 - currLen)
        );
    }
};

