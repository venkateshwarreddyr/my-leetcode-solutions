// Problem: Check If It Is a Straight Line
// LeetCode: https://leetcode.com/problems/check-if-it-is-a-straight-line/
// Language: javascript
// Runtime: 71 ms
// Memory: 44.8 MB
// Submitted: 2023-05-29

function slope([x1, y1], [x2, y2]) {
    return ((y2 - y1) / (x2 - x1));
}

cl = console.log

var checkStraightLine = function ([first, ...rest]) {
    let set = new Set()
    for (let c of rest) {
        set.add(slope(first, c))
    }
    if (set.size === 2 && set.has(Infinity) && set.has(-Infinity)) {
        return true
    }
    return set.size === 1
};
