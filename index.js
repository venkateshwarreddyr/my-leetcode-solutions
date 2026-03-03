let n = nums.length;

// sort descending
nums = nums.sort((a,b) => (b-a));

// sort ascending
nums = nums.sort((a,b) => (a-b));

// binary search for ascending order

let bs = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == target) {
            // do something
            return;
        }
        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    // left is the insertion point
    return left;
}

// bfs type 1
const queue = (node) => {
    let q = [node];
    while (q.length) {
        let e = q.shift();
        if (e) {
            q.push(e.left);
            q.push(e.right);
        }
    }
}

// dfs type 1

const dfs = (node) => {
    if(node){
        dfs(node.left)
        dfs(node.right)
    }
}

// object counter
let ob = arr.reduce((a,c) => ({...a, [c]: ++a[c] || 1}), {});

// PriorityQueueMinHeap
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