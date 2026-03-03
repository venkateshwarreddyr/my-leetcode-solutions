// Problem: Double a Number Represented as a Linked List
// LeetCode: https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/
// Language: javascript
// Runtime: 184 ms
// Memory: 61.4 MB
// Submitted: 2024-05-07

cl = console.log
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function(head) {
    let a = []
    let temp = head
    while(temp){
        a.push(temp.val)
        
        temp = temp.next
    }
    
    a.reverse()
    // cl(a)
    let an = []
    let carry = 0
    
    for(let i=0;i<a.length;i++){
        let x = a[i] + a[i] + carry
            an.push(x%10)
            carry = Math.trunc(x/10)
    }
    if(carry){
        an.push(carry)
    }
    // cl()
    // cl(an.reverse())
    an.reverse()
    let h = new ListNode()
    let p = null, t = h
    for(let i=0;i<an.length;i++){
        t.val = an[i]
        t.next = new ListNode()
        p = t
        t = t.next
    }
    
    p.next = null
    
    return h
    
};
