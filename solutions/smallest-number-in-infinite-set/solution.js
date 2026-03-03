// Problem: Smallest Number in Infinite Set
// LeetCode: https://leetcode.com/problems/smallest-number-in-infinite-set/
// Language: javascript
// Runtime: 167 ms
// Memory: 51.2 MB
// Submitted: 2023-07-13

var SmallestInfiniteSet = function () {
    const { PriorityQueue } = require("@datastructures-js/priority-queue");
    const pq = new PriorityQueue({ compare: (a, b) => a - b });
    for (let i = 1; i <= 1000; i++) pq.enqueue(i)
    SmallestInfiniteSet.prototype.popSmallest = function () {
        let x = pq.dequeue()
        while (x === pq.front()) pq.dequeue()
        return x
    };

    SmallestInfiniteSet.prototype.addBack = function (num) {
        pq.enqueue(num)
    };
};



