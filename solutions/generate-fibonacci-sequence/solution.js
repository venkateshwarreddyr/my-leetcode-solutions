// Problem: Generate Fibonacci Sequence
// LeetCode: https://leetcode.com/problems/generate-fibonacci-sequence/
// Language: javascript
// Runtime: 43 ms
// Memory: 41.6 MB
// Submitted: 2023-12-13

/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let a = 0
    let b = 1

    while(true) {
        yield a
        let c = a + b
        a = b
        b = c
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
