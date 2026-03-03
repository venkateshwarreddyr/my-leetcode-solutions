// Problem: Sort List
// LeetCode: https://leetcode.com/problems/sort-list/
// Language: javascript
// Runtime: 18 ms
// Memory: 80.4 MB
// Submitted: 2025-10-30

function findMid(temp) {
    if (!temp || !temp.next) return temp;

    let slow = temp;
    let fast = temp.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

var conquer_mergeSortedLists = function (left, right) {
    if (!left || !right) return left || right;

    // dummy  left right

    let dummyStart, temp;

    temp = dummyStart = new ListNode(null);
    while (left && right) {
        if (left.val < right.val) {
            temp.next = left;
            left = left.next;
        } else {
            temp.next = right;
            right = right.next;
        }
        temp = temp.next;
    }
    temp.next = left || right;

    return dummyStart.next;
};

var divide_intoHalves = function (head) {
    if (!head || !head.next) return head;

    let mid = findMid(head);

    let right = mid.next;
    mid.next = null;

    return conquer_mergeSortedLists(divide_intoHalves(head), divide_intoHalves(right));
};

var sortList = function (head) {
    return divide_intoHalves(head);
};

