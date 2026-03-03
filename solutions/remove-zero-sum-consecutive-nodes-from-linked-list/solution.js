// Problem: Remove Zero Sum Consecutive Nodes from Linked List
// LeetCode: https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/
// Language: javascript
// Runtime: 9 ms
// Memory: 58.2 MB
// Submitted: 2025-12-16

var removeZeroSumSublists = function (head) {
    let o = {}

    let dummy = new ListNode(-Infinity, head)
    let prefixSum = 0
    o[prefixSum] = dummy

    let t = dummy.next
    while (t) {
        prefixSum += t.val
        if (prefixSum in o) {
            let prevNode = o[prefixSum]

            let prefixSum2 = prefixSum
            for (let t2 = prevNode.next; t2 !== t; t2 = t2.next) {
                prefixSum2 += t2.val
                delete o[prefixSum2]
            }

            prevNode.next = t.next
        } else {
            o[prefixSum] = t
        }
        t = t.next
    }

    return dummy.next
};

