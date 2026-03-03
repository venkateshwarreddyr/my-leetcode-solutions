// Problem: Linked List Random Node
// LeetCode: https://leetcode.com/problems/linked-list-random-node/
// Language: javascript
// Runtime: 13 ms
// Memory: 64.9 MB
// Submitted: 2025-11-01

var Solution = function(head) {
    this.head = head;
};

Solution.prototype.getRandom = function() {
    let result = null;
    let current = this.head;
    let count = 0;

    while (current) {
        count++;
        // With probability 1/count, replace result with current node's value
        if (Math.floor(Math.random() * count) === 0) {
            result = current.val;
        }
        current = current.next;
    }

    return result;
};

