// Problem: Take Gifts From the Richest Pile
// LeetCode: https://leetcode.com/problems/take-gifts-from-the-richest-pile/
// Language: javascript
// Runtime: 104 ms
// Memory: 48 MB
// Submitted: 2023-02-05

/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    const pq = new PriorityQueueMaxHeap();
    
    for(let gift of gifts){
        pq.enqueue(gift);
    }
    
    while(k!=0){
        const val = pq.dequeue();
        pq.enqueue(Math.floor(Math.sqrt(val)));
        k--;
    }
                   
     let sum = 0;
                   
    while(!pq.isEmpty()){
            sum+=pq.dequeue();
        }
        
        return sum;
};

class PriorityQueueMaxHeap {
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
        if (this.p(this.queue[ind]||[]) > this.p(this.queue[parseInt((ind-1) / 2)]||[])) {
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
          this.p(this.queue[2 * ind + 1]||[]) > this.p(this.queue[2 * ind + 2]||[]) ||
          this.p(this.queue[2 * ind + 2]||[]) === undefined
        ) {
          if (this.p(this.queue[2 * ind + 1]||[]) > this.p(this.queue[ind]||[])) {
            this.swap(ind, 2 * ind + 1);
            ind = 2 * ind + 1;
          } else {
            break;
          }
        } else if (
          this.p(this.queue[2 * ind + 1]||[]) <= this.p(this.queue[2 * ind + 2]||[])
        ) {
          if (this.p(this.queue[2 * ind + 2]||[]) > this.p(this.queue[ind]||[])) {
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
