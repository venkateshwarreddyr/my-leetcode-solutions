// Problem: Find Subsequence of Length K With the Largest Sum
// LeetCode: https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/
// Language: javascript
// Runtime: 178 ms
// Memory: 46.5 MB
// Submitted: 2022-01-19

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    let arr = new Array(nums);
    let pq = new PriorityQueueMaxHeap(x => x[0])
    
    nums.forEach((e,i) => {
        pq.enqueue([e,i])
    })
    for(let i=0;i<k;i++){
        let [e, ii] = pq.dequeue()
        arr[ii] = e
    }
    return arr.filter(e => !isNaN(e))
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
