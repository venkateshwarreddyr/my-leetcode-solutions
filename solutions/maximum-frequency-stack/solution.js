// Problem: Maximum Frequency Stack
// LeetCode: https://leetcode.com/problems/maximum-frequency-stack/
// Language: javascript
// Runtime: 490 ms
// Memory: 80.5 MB
// Submitted: 2023-07-02

cl = console.log
var FreqStack = function () {
    freq = {}
    pq = new MaxPriorityQueue({
        compare: (a, b) => b[1] - a[1] || b[2] - a[2]
    })
    steps = 0
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
    steps++;
    freq[val] = freq[val] || 0
    freq[val]++
    pq.enqueue([val, freq[val], steps])
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
    let [val, f, pos] = pq.dequeue()
    freq[val]--
    return val
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
