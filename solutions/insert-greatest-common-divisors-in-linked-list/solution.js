// Problem: Insert Greatest Common Divisors in Linked List
// LeetCode: https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/
// Language: javascript
// Runtime: 89 ms
// Memory: 50.2 MB
// Submitted: 2023-08-05

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const gcd = (a, b) => (!b ? a : gcd(b, a % b))
var insertGreatestCommonDivisors = function(head) {
    if(head.next === null) return head
    let temp = head
    while(temp?.next){
        let c = temp
        let cn = temp.next
        let node = new ListNode(gcd(c.val, cn.val))
        node.next = cn
        c.next = node
        
        temp = cn
    }
    
    return head
};
