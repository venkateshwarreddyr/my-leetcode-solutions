// Problem: Top K Frequent Elements
// LeetCode: https://leetcode.com/problems/top-k-frequent-elements/
// Language: javascript
// Runtime: 88 ms
// Memory: 43.2 MB
// Submitted: 2021-07-28

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(arr, k) {
    let obj = {}
    for(let num of arr){
        obj[num] = (obj[num]||0)+1;
    }
    let ans = []
    for(let ele of Object.entries(obj).sort((a,b) => b[1]-a[1])){
        ans.push(ele[0])
        k--
        if(k===0) return ans 
    }
};
var topKFrequent1 = function(arr, k) {
    let obj = {}
    for(let num of arr){
        obj[num] = (obj[num]||0)+1;
    }
    let pq = new PriorityQueueMaxHeap(x => (x||[])[1])
    for(let ele of Object.entries(obj)){
        pq.enqueue(ele)
    }
    let ans = []
    while(k!=0){
        let ele = pq.dequeue();
        ans.push(ele[0])
        k--
    }
    return ans
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
