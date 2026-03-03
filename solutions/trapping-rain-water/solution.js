// Problem: Trapping Rain Water
// LeetCode: https://leetcode.com/problems/trapping-rain-water/
// Language: javascript
// Runtime: 85 ms
// Memory: 49.6 MB
// Submitted: 2023-10-27


cl = console.log

var Stack = function () {
    let a = [];
    this.top = () => a[a.length - 1];
    this.size = () => a.length;
    this.empty = () => !a.length;
    this.push = (e) => a.push(e);
    this.pop = () => a.pop();
    this.cl = () => console.log(a);
};

var trap = function (a) {
    let n = a.length
    let left = new Array(n).fill(0)
    let right = new Array(n).fill(0)

    for (let i = 1; i < n; i++) {
        left[i] = Math.max(a[i - 1], left[i - 1])
    }

    for (let i = n - 2; i > -1; i--) {
        right[i] = Math.max(a[i + 1], right[i + 1])
    }
    cl(left)
    cl(right)

    let an = 0

    for (let i = 0; i < n; i++) {
        let x = Math.min(left[i], right[i]) - a[i]
        if (x > 0)
            an += (x)
    }

    return an
};
/**

1 0 1
1 2 1
1 1 2
2 0 2
1 1 2
1 3 2
1 2 3
2 1 3
1 2 3
2 1 3

 */
