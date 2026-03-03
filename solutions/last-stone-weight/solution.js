// Problem: Last Stone Weight
// LeetCode: https://leetcode.com/problems/last-stone-weight/
// Language: javascript
// Runtime: 108 ms
// Memory: 42.3 MB
// Submitted: 2021-07-28

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    
    let pq = new PriorityQueueMaxHeap(x => x)
    
    for(let ele of stones){
        pq.enqueue(ele)
    }
    while(pq.size()>1){
        let one = pq.dequeue()
        let two = pq.dequeue()
        console.log({one, two})
        if(one !== two){
            pq.enqueue(one-two)
        }
    }
    
    return [pq.dequeue()]
};

    class PriorityQueueMaxHeap {
      constructor(p = (x) => x ) {
        this.queue = [];
        this.p = p;
      }
    size(){
        return this.queue.length
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
          if (this.p(this.queue[ind]) > this.p(this.queue[parseInt((ind-1) / 2)])) {
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
            this.p(this.queue[2 * ind + 1]) > this.p(this.queue[2 * ind + 2]) ||
            this.p(this.queue[2 * ind + 2]) === undefined
          ) {
            if (this.p(this.queue[2 * ind + 1]) > this.p(this.queue[ind])) {
              this.swap(ind, 2 * ind + 1);
              ind = 2 * ind + 1;
            } else {
              break;
            }
          } else if (
            this.p(this.queue[2 * ind + 1]) <= this.p(this.queue[2 * ind + 2])
          ) {
            if (this.p(this.queue[2 * ind + 2]) > this.p(this.queue[ind])) {
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
