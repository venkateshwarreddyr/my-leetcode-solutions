// Problem: Peeking Iterator
// LeetCode: https://leetcode.com/problems/peeking-iterator/
// Language: javascript
// Runtime: 54 ms
// Memory: 56.6 MB
// Submitted: 2025-11-29

class PeekingIterator {
    constructor(iterator) {
        this.iterator = iterator;
        this.nextElement = this.iterator.hasNext() ? this.iterator.next() : null;
    }

    peek() {
        return this.nextElement;
    }

    next() {
        const current = this.nextElement;
        this.nextElement = this.iterator.hasNext() ? this.iterator.next() : null;
        return current;
    }

    hasNext() {
        return this.nextElement !== null;
    }
}
