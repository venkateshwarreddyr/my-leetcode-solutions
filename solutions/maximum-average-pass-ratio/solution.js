// Problem: Maximum Average Pass Ratio
// LeetCode: https://leetcode.com/problems/maximum-average-pass-ratio/
// Language: javascript
// Runtime: 1350 ms
// Memory: 105.3 MB
// Submitted: 2025-09-02

/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function (classes, extraStudents) {
    const pq = new MinHeap((a, b) => b[2] - a[2])

    const gain = (p, t) => (p + 1) / (t + 1) - p / t;
    for (let [pass, total] of classes) {
        pq.enqueue([pass, total, gain(pass, total)])
    }

    while (extraStudents) {
        let [pass, total, passRatio] = pq.dequeue()
        pass++
        total++
        pq.enqueue([pass, total, gain(pass, total)])
        extraStudents--
    }

    let n = classes.length
    let totalPassRatio = 0

    while (!pq.isEmpty()) {
        const [pass, total, passRatio] = pq.dequeue()
        console.log([pass, total, passRatio])
        totalPassRatio += pass / total
    }

    return totalPassRatio / classes.length

};

class MinHeap {
    constructor(comparator) {
        this._compare = comparator || ((a, b) => a - b);
        this._heap = [];
    }

    size() {
        // O(1)
        return this._heap.length;
    }

    isEmpty() {
        // O(1)
        return this._heap.length === 0;
    }

    peek() {
        // O(1)
        return this.isEmpty() ? null : this._heap[0];
    }

    enqueue(value) {
        // O(log n)
        this._heap.push(value);
        this._siftUp(this._heap.length - 1);
        return this;
    }

    dequeue() {
        // O(log n)
        if (this.isEmpty()) return null;
        this._swap(0, this._heap.length - 1);
        const removed = this._heap.pop();
        if (!this.isEmpty()) this._siftDown(0);
        return removed;
    }

    clear() {
        // O(1)
        this._heap = [];
        return this;
    }

    toArray() {
        // O(n)
        return this._heap.slice();
    }

    /* private helpers */

    _parent(i) {
        return Math.floor((i - 1) / 2);
    } // O(1)
    _left(i) {
        return 2 * i + 1;
    } // O(1)
    _right(i) {
        return 2 * i + 2;
    } // O(1)
    _swap(i, j) {
        const t = this._heap[i];
        this._heap[i] = this._heap[j];
        this._heap[j] = t;
    } // O(1)

    _siftUp(idx) {
        // O(log n)
        let parent = this._parent(idx);
        while (idx > 0 && this._compare(this._heap[idx], this._heap[parent]) < 0) {
            this._swap(idx, parent);
            idx = parent;
            parent = this._parent(idx);
        }
    }

    _siftDown(idx) {
        // O(log n)
        const size = this._heap.length;
        while (true) {
            const left = this._left(idx);
            const right = this._right(idx);
            let smallest = idx;

            if (
                left < size &&
                this._compare(this._heap[left], this._heap[smallest]) < 0
            ) {
                smallest = left;
            }
            if (
                right < size &&
                this._compare(this._heap[right], this._heap[smallest]) < 0
            ) {
                smallest = right;
            }
            if (smallest === idx) break;
            this._swap(idx, smallest);
            idx = smallest;
        }
    }
}
