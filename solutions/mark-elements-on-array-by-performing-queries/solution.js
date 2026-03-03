// Problem: Mark Elements on Array by Performing Queries
// LeetCode: https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/
// Language: javascript
// Runtime: 426 ms
// Memory: 86.5 MB
// Submitted: 2024-04-16

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var unmarkedSumArray = function(nums, queries) {
    let sum = nums.reduce((a, c) => a + c, 0);
    let marked = new Set();

    const { PriorityQueue } = require("@datastructures-js/priority-queue");
    const pq = new PriorityQueue({ compare: (a, b) => a.e - b.e || a.i - b.i });

    nums.forEach((e, i) => {
        pq.enqueue({
            e, i
        });
    })


    let an = []

    for(let [index, k] of queries) {
        if(!marked.has(index)) {
            sum -= nums[index];
            marked.add(index);
        }

        while(pq.size() && k) {
            let ele = pq.dequeue();
            if(!marked.has(ele.i)) {
                sum -= ele.e;
                marked.add(ele.i);
                k--;
            }
        }
        an.push(sum);
    }


    return an;
};
