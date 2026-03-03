// Problem: Design an Ordered Stream
// LeetCode: https://leetcode.com/problems/design-an-ordered-stream/
// Language: javascript
// Runtime: 18 ms
// Memory: 70.7 MB
// Submitted: 2025-07-26

class OrderedStream {
    n;
    a;
    i;
    constructor(n) {
        this.n = n;
        this.a = new Array(n);
        this.i = 0;
    }
    insert(idKey, value) {
        const { a } = this;
        a[idKey - 1] = value;
        let result = [];
        while (a[this.i]) {
            result.push(a[this.i]);
            this.i++;
        }
        return result;
    }
}

