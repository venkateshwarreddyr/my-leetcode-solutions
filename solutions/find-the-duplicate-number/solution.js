// Problem: Find the Duplicate Number
// LeetCode: https://leetcode.com/problems/find-the-duplicate-number/
// Language: javascript
// Runtime: 62 ms
// Memory: 49.2 MB
// Submitted: 2023-09-19

/**
 * @param {number[]} nums
 * @return {number}
 */

var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[slow];
    
        // console.log({slow, fast})
    while(slow!=fast){
        slow = nums[slow];
        fast = nums[nums[fast]];
        // console.log({slow, fast})
    }
    slow = 0;
        // console.log({slow, fast})
    while(slow!=fast){
        slow = nums[slow];
        fast = nums[fast];
        // console.log({slow, fast})
    }
    return slow
};

var findDuplicate2 = function(nums) {
    let pq = new PriorityQueueMinHeap();
    for(let i =0; i< nums.length;i++){
        pq.enqueue(nums[i]);
    }
    let prev = pq.dequeue();
    let curr = null;
    while(!pq.isEmpty()){
        curr = pq.dequeue();
        if(curr==prev){
            return curr;
        }
        
            prev = curr;
        
    }
};
var findDuplicate1 = function(nums) {
    sum = 0
    for(let i =0; i< nums.length;i++){
        sum+=nums[i]
    }
    let n = nums.length-1
    return sum - (n*(n+1)/2);
    // let counter = 0;
    // for(let i =0; i< nums.length;i++){
    //     for(let j =0; j< nums.length; j++){
    //         if(nums[i]===nums[j] && i!=j){
    //             return nums[i]
    //         }
    //     }
    // }
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
