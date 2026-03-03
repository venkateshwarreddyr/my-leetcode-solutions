// Problem: Sliding Window Maximum
// LeetCode: https://leetcode.com/problems/sliding-window-maximum/
// Language: javascript
// Runtime: 659 ms
// Memory: 105.7 MB
// Submitted: 2023-08-16

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let ans = [];
    let obj = {};
        let pq = new PriorityQueueMaxHeap();
    for(let j =0; j<k;j++){
            pq.enqueue(nums[j])
        }
        let max = pq.getTop();
    ans.push(max);
    for(let i =k; i< nums.length; i++){
        obj[nums[i-k]] = (obj[nums[i-k]]||0)+1;
        // console.log(obj, pq.getTop(), nums[i], nums[i-k]);
        while(obj[pq.getTop()]){ 
            obj[pq.getTop()]--;
            pq.dequeue();
        }
        // console.log(obj, pq.getTop());
        pq.enqueue(nums[i])
        max = pq.getTop();
        ans.push(max);
        // console.log()
    }
    return ans;
};

    class PriorityQueueMaxHeap {
      constructor(p = (x) => x ) {
        this.queue = [];
        this.p = p;
      }
        getTop(){
            return this.queue[0];
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
