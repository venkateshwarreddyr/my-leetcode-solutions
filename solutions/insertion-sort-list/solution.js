// Problem: Insertion Sort List
// LeetCode: https://leetcode.com/problems/insertion-sort-list/
// Language: javascript
// Runtime: 7 ms
// Memory: 60.2 MB
// Submitted: 2025-12-29

var insertionSortList = function (head) {
    if (!head || !head.next) return head; // 0 or 1 element - already sorted

    head = new ListNode(Infinity, head);

    let prevRight = head.next;
    let right = head.next.next;

    //       head                 4                  2             1        3
    //       prevLeft            left/prevRight    right    nextRight
    // sorted   unsorted
    // 1 2   3          4       5     6             3        .
    //       prevLeft  left          prevRight    right    nextRight
    // go right
    for (; right; right = right.next) {
        if (prevRight.val > right.val) {
            // on left
            let prevLeft = head;
            let left = head.next;
            for (; left && left != right; left = left.next) {
                if (left.val > right.val) {
                    let nextRight = right.next;
                    prevLeft.next = right;
                    right.next = left;

                    prevRight.next = nextRight;
                    right = prevRight; // so that right will be nextRight later at ###
                    break;
                }
                prevLeft = left;
            }
        }
        prevRight = right;
    }

    return head.next;
};

