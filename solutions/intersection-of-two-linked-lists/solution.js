// Problem: Intersection of Two Linked Lists
// LeetCode: https://leetcode.com/problems/intersection-of-two-linked-lists/
// Language: javascript
// Runtime: 96 ms
// Memory: 48.5 MB
// Submitted: 2021-07-10

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    while(headA&&headB){
        if(headA.visited) return headA;
        else if(headB.visited) return headB;
        else if(headA===headB) return headB;
        else{
            headA.visited = true;
            headB.visited = true;
            headA=headA.next;
            headB = headB.next;
        }
        
    }
    while(headA){
         if(headA.visited)return headA;
         headA.visited = true;
         headA=headA.next;
    }
     while(headB){
         if(headB.visited)return headB;
         headB.visited = true;
         headB=headB.next;
    }
    return null
};
