// Problem: Next Greater Element II
// LeetCode: https://leetcode.com/problems/next-greater-element-ii/
// Language: javascript
// Runtime: 5 ms
// Memory: 60.9 MB
// Submitted: 2025-11-05

var Stack = function () {
    let a = [];
    this.top = () => a[a.length - 1];
    this.size = () => a.length;
    this.empty = () => !a.length;
    this.push = (e) => a.push(e);
    this.pop = () => a.pop();
    this.cl = () => console.log(a);
};


var nextGreaterElements = function (nums) {
    let n = nums.length
    let stack = new Stack();
    let res = new Array(nums.length).fill(-1)
    for (let i = 0; i < 2 * n; i++) {
        let curr = nums[i % n]
        while (stack.size() && nums[stack.top()] < curr) {

            res[stack.pop()] = curr
        }

        if (i < n) stack.push(i)
    }

    return res
};

function nextGreaterElements(nums) {
  const n = nums.length;
  const result = Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < 2 * n; i++) {
    const current = nums[i % n];
    while (stack.length && nums[stack[stack.length - 1]] < current) {
      const idx = stack.pop();
      result[idx] = current;
    }
    if (i < n) stack.push(i);
  }

  return result;
}

