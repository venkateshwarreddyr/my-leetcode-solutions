// Problem: Copy List with Random Pointer
// LeetCode: https://leetcode.com/problems/copy-list-with-random-pointer/
// Language: javascript
// Runtime: 43 ms
// Memory: 55.1 MB
// Submitted: 2025-11-24

/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    let ob = new Map()
    let new_head = new _Node()
    {
        let temp = new_head
        let curr = head;
        let prev = null
        while (curr !== null) {
            temp.next = new _Node(curr.val, null, curr.random);
            ob.set(curr, temp.next)
            if (prev) {
                prev.next = temp
            }

            prev = temp
            temp = temp.next
            curr = curr.next
        }
    }

    {
        let curr = new_head.next;
        while (curr !== null) {
            curr.random = ob.get(curr.random)
            curr = curr.next
        }

    }


    return new_head.next

};
