// Problem: Remove Duplicates from Sorted List
// LeetCode: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
// Language: javascript
// Runtime: 59 ms
// Memory: 43.1 MB
// Submitted: 2023-05-23

var deleteDuplicates = function (head) {
    let temp = head;
    if (temp)
        while (temp.next != null) {
            if (temp.val === temp.next.val) {
                temp.next = temp.next.next
            } else {
                temp = temp.next;
            }
        }
    return head
};
