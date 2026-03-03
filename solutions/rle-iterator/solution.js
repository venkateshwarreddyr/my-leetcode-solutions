// Problem: RLE Iterator
// LeetCode: https://leetcode.com/problems/rle-iterator/
// Language: javascript
// Runtime: 3 ms
// Memory: 56.5 MB
// Submitted: 2025-12-27

class RLEIterator {
    encoding = [];
    n = 0;
    i = 0;

    constructor(encoding) {
        this.encoding = encoding;
        this.n = encoding.length;
        this.i = 0;
    }

    next(skip) {
        for (; this.i < this.n; this.i += 2) {
            let count = this.encoding[this.i];
            if (!count) continue;

            this.encoding[this.i] -= Math.min(count, skip);
            skip -= Math.min(count, skip);
            if (skip) continue;

            return this.encoding[this.i + 1];
        }
        return -1;
    }
}

