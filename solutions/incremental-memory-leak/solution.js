// Problem: Incremental Memory Leak
// LeetCode: https://leetcode.com/problems/incremental-memory-leak/
// Language: javascript
// Runtime: 67 ms
// Memory: 41.7 MB
// Submitted: 2023-07-22

/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
var memLeak = function (memory1, memory2) {

    let i = 1
    while (true) {

        if (i > memory1 && i > memory2) return [i, memory1, memory2]
        if (memory1 >= memory2) {
            memory1 -= i
        } else {
            memory2 -= i
        }

        i++
    }

};
