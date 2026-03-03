// Problem: Continuous Subarrays
// LeetCode: https://leetcode.com/problems/continuous-subarrays/
// Language: javascript
// Runtime: 689 ms
// Memory: 71.5 MB
// Submitted: 2023-07-03

var Deque = function () {
  let a = []

  Deque.prototype.size = () => a.length
  Deque.prototype.empty = Deque.prototype.isEmpty = () => !a.length

  Deque.prototype.front = () => a[0]
  Deque.prototype.back = Deque.prototype.peek = () => a[a.length - 1]

  Deque.prototype.push_front = (e) => a.unshift(e)
  Deque.prototype.push_back = (e) => a.push(e)

  Deque.prototype.pop_front = () => a.shift()
  Deque.prototype.pop_back = () => a.pop()
}
// deque.back()    // !deque.empty()  deque.front()

var MinMaxQueue = function () {
  // 5 4 2 4

  let a = []       // all values  5 4 2
  let dec_arr = [] // dec         5 4 2
  let inc_arr = [] // inc         2

  MinMaxQueue.prototype.size = () => a.length
  MinMaxQueue.prototype.getMax = () => dec_arr[0]
  MinMaxQueue.prototype.getMin = () => inc_arr[0]
  MinMaxQueue.prototype.push_back = (e) => {
    a.push(e)
    while (dec_arr.length && dec_arr[dec_arr.length - 1] < e) {
      dec_arr.pop()
    }
    dec_arr.push(e)
    while (inc_arr.length && inc_arr[inc_arr.length - 1] > e) {
      inc_arr.pop()
    }
    inc_arr.push(e)
  }
  MinMaxQueue.prototype.pop_front = () => {
    if (!a.length) return -1

    const e = a.shift()
    if (e === dec_arr[0]) dec_arr.shift()
    if (e === inc_arr[0]) inc_arr.shift()
    return e
  }
}

var continuousSubarrays = function (a) {
  const queue = new MinMaxQueue()
  let ans = 0

  //                        5 4 2 4

  // a                     4 2 4
  // dec_arr = [] //       4
  // inc_arr = [] //       2 4

  //           ans       1 2 2 3 = 8

  for (const e of a) {
    queue.push_back(e)
    while (queue.getMax() - queue.getMin() > 2) {
      queue.pop_front()
    }
    ans += queue.size()
  }
  return ans
}

