// Problem: Delete Nodes From Linked List Present in Array
// LeetCode: https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/
// Language: javascript
// Runtime: 119 ms
// Memory: 100 MB
// Submitted: 2025-11-01

function bins_e(a, tar, lo = 0, hi = a.length - 1) {
  while (lo <= hi) {
    let mid = Math.trunc(lo / 2 + hi / 2);
    // if (mid === tar) {   // a is not there
    if (a[mid] === tar) {
      // a is there
      // if (a[mid] === a[mid-1]) {  // tar is there
      return mid; //           found
      // } else if (mid < tar) {
    } else if (a[mid] < tar) {
      lo = mid + 1; //         tar on right
    } else {
      hi = mid - 1; //   NOTE:   mid or mid-1        tar on left
    }
  }
  return -1; //                    not found
}

var modifiedList = function(a, head) {
    a = a.sort((a, b) => a - b)

    let curr = head
    let prev = null
    while(curr) {
        if(bins_e(a, curr.val) > -1) {
            if(prev) {
                prev.next = curr.next
            } else {
                head = curr.next
            }
        } else {
            prev = curr
        }
        curr = curr.next
    }

    return head
};
