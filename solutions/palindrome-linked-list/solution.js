// Problem: Palindrome Linked List
// LeetCode: https://leetcode.com/problems/palindrome-linked-list/
// Language: javascript
// Runtime: 168 ms
// Memory: 56.6 MB
// Submitted: 2021-05-13

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function(head) {
//     let mainHead = null;
//     let result = true
//     function x(head){
//     if(head){
//     if(!mainHead) mainHead = head;
//     x(head.next)
//     result = result && (mainHead.val === head.val)
//     mainHead = mainHead.next
//     }
//     return result
//     }
//     return x(head)
// };

// var isPalindrome = function(head) {
//     // let len = 0;
//     let temp = head.next
//     let newArr = []
//         for(let i = head; i!= null; i=i.next){
//             // len++;
//             newArr.push(i.val)
//         }
//     return newArr.join('') === newArr.reverse().join('')
// };


var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    while(fast.next != null && fast.next.next != null){
        fast = fast.next.next;
        slow = slow.next
    }
    let dum = slow.next;
    let revLL = reverse(dum)

    while(revLL != null){
        if(revLL.val != head.val) return false
        revLL = revLL.next
        head = head.next
    }
    return true
};
var reverse = function(head) {
    let prev = null;
    while(head != null){
        temp = head.next
        head.next = prev;
        prev = head;
        head = temp;
    }
    return prev;
}








