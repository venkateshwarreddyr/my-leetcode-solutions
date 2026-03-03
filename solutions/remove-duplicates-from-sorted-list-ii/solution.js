// Problem: Remove Duplicates from Sorted List II
// LeetCode: https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
// Language: javascript
// Runtime: 2 ms
// Memory: 58.4 MB
// Submitted: 2025-10-30

var deleteDuplicates = function (head) {
    let dummyHead = new ListNode(Infinity, head)
    let p
    for (let c = dummyHead; c && c.next; c = c.next) {
        if (c.val === c.next.val) {
            while (c && c.next && (c.val === c.next.val)) {
                c = c.next;
            }
            p.next = c.next
        } else {
            p = c
        }
    }
    return dummyHead.next
};

