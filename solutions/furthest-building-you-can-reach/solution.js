// Problem: Furthest Building You Can Reach
// LeetCode: https://leetcode.com/problems/furthest-building-you-can-reach/
// Language: javascript
// Runtime: 134 ms
// Memory: 52.5 MB
// Submitted: 2023-07-14

cl = console.log
/**
 * @param {number[]} a
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (a, bricks, ladders) {
    const pq = new PriorityQueue({ compare: (a, b) => a - b });
    let n = a.length
    let i = 0
    for (; i < n - 1; i++) {
        let curr = a[i]
        let next = a[i + 1]

        if (curr < next) {
            pq.enqueue(next - curr)

            if (pq.size() <= ladders) {
                continue;
            }

            let b = pq.dequeue()
            if (bricks >= b) {
                bricks -= b
            } else {
                break;
            }
        }
    }

    return i
};
