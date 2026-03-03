// Problem: The Number of the Smallest Unoccupied Chair
// LeetCode: https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/
// Language: javascript
// Runtime: 1376 ms
// Memory: 49.1 MB
// Submitted: 2021-07-25

/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    
    let chair = new Array(times.length).fill(-1);
    
    function insert(person){
        for(let i = 0; i< chair.length; i++){
            if(chair[i]===-1) {chair[i] = person; return i;}
        }
    }
            function remove(person){
        for(let i = 0; i< chair.length; i++){
            if(chair[i]===person) {chair[i] = -1; break;}
        }
    }
    

    let PQinsert = []
    let PQremove = []
    
    function insert(person){
        for(let i = 0; i< chair.length; i++){
            if(chair[i]===-1) {chair[i] = person; return i;}
        }
    }

   for(let i =0; i< times.length;i++){
       PQinsert.push([times[i][0], i, times[i][1]]);
       PQremove.push([times[i][1], i, times[i][0]]);
   }
    // PQinsert.printQueue();
    // PQinsert.printQueue();
    PQinsert.sort((a,b) => a[0]-b[0])
    PQremove.sort((a,b) => a[0]-b[0])

    console.log()
    while(PQremove.length){
        let u = PQinsert.shift();
        let v = PQremove.shift();
        // console.log({u, v})
        if(u[0]<v[0]){
            insert(u[1]);
            PQremove.unshift(v);
        }else {
            remove(v[1]);
            PQinsert.unshift(u);
        }
        let ind = chair.indexOf(targetFriend)
        if(ind!==-1) return ind
    }
    
};

























/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair1 = function(times, targetFriend) {
    
    let chair = new Array(times.length).fill(-1);
    
    function insert(person){
        for(let i = 0; i< chair.length; i++){
            if(chair[i]===-1) {chair[i] = person; return i;}
        }
    }
            function remove(person){
        for(let i = 0; i< chair.length; i++){
            if(chair[i]===person) {chair[i] = -1; break;}
        }
    }
    
    function sortFunc0(x=[]){
        return x[0]
    }
    let PQinsert = new PriorityQueue(sortFunc0);
    let PQremove = new PriorityQueue(sortFunc0);
    
    function insert(person){
        for(let i = 0; i< chair.length; i++){
            if(chair[i]===-1) {chair[i] = person; return i;}
        }
    }

   for(let i =0; i< times.length;i++){
       PQinsert.enqueue([times[i][0], i, times[i][1]]);
       PQremove.enqueue([times[i][1], i, times[i][0]]);
   }
    // PQinsert.printQueue();
    // PQinsert.printQueue();

    while(!PQremove.isEmpty()){
        let u = PQinsert.dequeue();
        let v = PQremove.dequeue();
        if(u[0]<v[0]){
            insert(u[1]);
            PQremove.enqueue(v);
        }else {
            remove(v[1]);
            PQinsert.enqueue(u);
        }
        // console.log({u, v, chair})
        let ind = chair.indexOf(targetFriend)
        if(ind!==-1) return ind
    }
    
};

class PriorityQueue {
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
    // console.log(this.queue, "length: ", this.queue.length);
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
        this.p(this.queue[2 * ind + 1]) < this.p(this.queue[2 * ind + 2]||[]) ||
        this.p(this.queue[2 * ind + 2]||[]) === undefined
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

