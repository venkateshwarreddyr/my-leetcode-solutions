// Problem: Single-Threaded CPU
// LeetCode: https://leetcode.com/problems/single-threaded-cpu/
// Language: javascript
// Runtime: 551 ms
// Memory: 125.6 MB
// Submitted: 2023-07-14

cl = console.log
  var getOrder = function(tasks) {
    const n = tasks.length;
    const pq = new MinPriorityQueue({ compare: (a, b) => a[1] - b[1] || a[2] - b[2] });
  
    tasks.forEach((x, j) => x.push(j));
    tasks.sort((a, b) => a[0] - b[0]);
  
    const res = new Array(tasks.length);
    let i = 0;
    let j = 0;
    let time = 0;
    while (i < n) {
      if (j < n) {
        if (time < tasks[j][0] && pq.isEmpty()) {
          time = tasks[j][0];
        }
        while (j < n && tasks[j][0] <= time) {
          pq.enqueue(tasks[j++]);
        }
      }
      const e = pq.dequeue();
      res[i++] = e[2];
      time += e[1];
    }
  
    return res;
  };
