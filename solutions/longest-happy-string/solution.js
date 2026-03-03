// Problem: Longest Happy String
// LeetCode: https://leetcode.com/problems/longest-happy-string/
// Language: javascript
// Runtime: 7 ms
// Memory: 57.5 MB
// Submitted: 2025-10-29

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
    const pq = new PriorityQueue((a, b) => b[1] - a[1])
    let an = ''
    pq.enqueue(['a', a])
    pq.enqueue(['b', b])
    pq.enqueue(['c', c])
    while (!pq.isEmpty()) {
        let [char1, num1] = pq.dequeue()
        let [char2, num2] = pq.dequeue() ?? []


        if (char2 && an.at(-1) === char1) {
            an += char2
            num2--
        } else {
            if (num1) {
                an += char1
                num1--
            }
            if (num1) {
                an += char1
                num1--
            }

            if (!char2 || !num2) break
        }


        if (num1) {
            pq.enqueue([char1, num1])
        }
        if (num2) {
            pq.enqueue([char2, num2])
        }

    }

    return an
};
