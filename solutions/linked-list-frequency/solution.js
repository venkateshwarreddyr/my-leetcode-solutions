// Problem: Linked List Frequency
// LeetCode: https://leetcode.com/problems/linked-list-frequency/
// Language: javascript
// Runtime: 178 ms
// Memory: 72.2 MB
// Submitted: 2024-04-28

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
var frequenciesOfElements = function(head) {
	let ob = {}
	let min = Infinity
	let max = -Infinity

	while(head) {
		ob[head.val] = ob[head.val] || 0
		ob[head.val]++
		min = Math.min(head.val, min)
		max = Math.max(head.val, max)
		head = head.next
}
let nhead = new ListNode()
let temp = nhead
for(let i of Object.values(ob)){
	temp.next = new ListNode(i)
    temp = temp.next
}

return nhead.next

}

