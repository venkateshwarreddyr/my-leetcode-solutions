// Problem: Add Two Numbers
// LeetCode: https://leetcode.com/problems/add-two-numbers/
// Language: javascript
// Runtime: 60 ms
// Memory: 47 MB
// Submitted: 2023-12-07

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let carry = 0;
    let l3 = new ListNode();
    let temp = l3;

    while (l1 && l2) {
        let sum = l1.val + l2.val + carry;

        carry = Math.trunc(sum / 10);

        temp.next = new ListNode( sum % 10 );
        temp = temp.next;
        l1 = l1.next;
        l2 = l2.next;
    }

    while(l1) {
      let sum = l1.val + carry;
      carry = Math.trunc(sum / 10);
      temp.next = new ListNode( sum % 10 );

      temp = temp.next;
      l1 = l1.next;
    }

    while(l2) {
      let sum = l2.val + carry;
      carry = Math.trunc(sum / 10);
      temp.next = new ListNode( sum % 10 );

      temp = temp.next;
      l2 = l2.next;
    }


    if (carry) {
        temp.next = new ListNode( carry );
    }

    return l3.next;
};
