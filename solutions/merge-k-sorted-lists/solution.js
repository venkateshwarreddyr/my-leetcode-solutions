// Problem: Merge k Sorted Lists
// LeetCode: https://leetcode.com/problems/merge-k-sorted-lists/
// Language: javascript
// Runtime: 19 ms
// Memory: 64 MB
// Submitted: 2025-06-30

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
var mergeKLists = function(lists) {
    
    let pq = new PriorityQueueMinHeap();
    for(let list of lists){
        while(list!=null){
            pq.enqueue(list.val);
            list = list.next
        }
    }
    let list = new ListNode();
    let node = list;
    while(!pq.isEmpty()){
        node.next = new ListNode(pq.dequeue(), null);
        node = node.next;
    }
    return list.next

};

class PriorityQueueMinHeap {
    constructor(p = (x) => x ) {
      this.queue = [];
      this.p = p;
    }
    isEmpty() {
      return this.queue.length === 0;
    }
    swap(i, j) {
      let temp = this.queue[i];
      this.queue[i] = this.queue[j];
      this.queue[j] = temp;
    }
    printQueue() {
      console.log(this.queue, "length: ", this.queue.length);
    }
    enqueue(val) {
      this.queue.push(val);
      let ind = this.queue.length - 1;
      while (ind) {
        if (this.p(this.queue[ind]) < this.p(this.queue[parseInt((ind-1) / 2)])) {
          this.swap(ind, parseInt((ind-1) / 2));
        }
        ind = parseInt((ind-1) / 2);
      }
    }
    dequeue() {
      this.swap(0, this.queue.length - 1);
      let deleted = this.queue.pop();
      let ind = 0;
      while (this.queue.length > ind) {
        if (
          this.p(this.queue[2 * ind + 1]) < this.p(this.queue[2 * ind + 2]) ||
          this.p(this.queue[2 * ind + 2]) === undefined
        ) {
          if (this.p(this.queue[2 * ind + 1]) < this.p(this.queue[ind])) {
            this.swap(ind, 2 * ind + 1);
            ind = 2 * ind + 1;
          } else {
            break;
          }
        } else if (
          this.p(this.queue[2 * ind + 1]) >= this.p(this.queue[2 * ind + 2])
        ) {
          if (this.p(this.queue[2 * ind + 2]) < this.p(this.queue[ind])) {
            this.swap(ind, 2 * ind + 2);
            ind = 2 * ind + 2;
          } else {
            break;
          }
        } else {
          break;
        }
      }
      return deleted;
    }
  }
