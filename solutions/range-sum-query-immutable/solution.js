// Problem: Range Sum Query - Immutable
// LeetCode: https://leetcode.com/problems/range-sum-query-immutable/
// Language: javascript
// Runtime: 1215 ms
// Memory: 62.9 MB
// Submitted: 2025-12-27

class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.arr = arr;
        this.tree = new Array(4 * this.n).fill(0);
        this.build(0, 0, this.n - 1);
    }

    build(node, start, end) {
        if (start === end) {
            this.tree[node] = this.arr[start];
            return;
        }

        const mid = Math.floor((start + end) / 2);
        const left = node * 2 + 1;
        const right = node * 2 + 2;

        this.build(left, start, mid);
        this.build(right, mid + 1, end);

        this.tree[node] = this.tree[left] + this.tree[right];
    }

    queryRange(l, r, node = 0, start = 0, end = this.n - 1) {
        // no overlap
        if (r < start || end < l) return 0;

        // total overlap
        if (start === end) return this.tree[node];
        if (l === start && end === r) return this.tree[node];

        // partial overlap
        const mid = Math.floor((start + end) / 2);
        const leftSum = this.queryRange(l, r, node * 2 + 1, start, mid);
        const rightSum = this.queryRange(l, r, node * 2 + 2, mid + 1, end);

        return leftSum + rightSum;
    }
}

var NumArray = function (nums) {
    this.st = new SegmentTree(nums);
};

NumArray.prototype.sumRange = function (left, right) {
    return this.st.queryRange(left, right);
};

