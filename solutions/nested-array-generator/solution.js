// Problem: Nested Array Generator
// LeetCode: https://leetcode.com/problems/nested-array-generator/
// Language: javascript
// Runtime: 105 ms
// Memory: 67.9 MB
// Submitted: 2023-12-13

/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
    let a = []

    function fn(arr) {
        for (let e of arr) {
            if (Array.isArray(e)) {
                fn(e)
            } else {
                a.push(e)
            }
        }
    }

    fn(arr)

    for(let e of a) {
        yield e
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
