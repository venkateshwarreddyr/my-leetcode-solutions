// Problem: Smallest Missing Multiple of K
// LeetCode: https://leetcode.com/problems/smallest-missing-multiple-of-k/
// Language: javascript
// Runtime: 1 ms
// Memory: 57.3 MB
// Submitted: 2025-10-19

var missingMultiple = function (a, k) {
    // 
    let set = new Set(a) // TC: O(1),  SC: O(N)
    for (let i = 1; true; i++) {
        if (!set.has(k * i)) {
            return k * i
        }
    }
};

const assert = (condition) => {
    if (!condition) throw new Error(`${a} !== ${b}`)
    return true
}
assert((missingMultiple([0, -1, 1], 1) === 2) === true)
assert((missingMultiple([0, -1, 1], 1) !== 2) === false)

