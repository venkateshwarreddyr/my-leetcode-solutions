// Problem: Kth Largest Element in a Stream
// LeetCode: https://leetcode.com/problems/kth-largest-element-in-a-stream/
// Language: javascript
// Runtime: 27 ms
// Memory: 69.6 MB
// Submitted: 2025-07-26

class MinHeap {
    constructor(a = [], k = Infinity) {
        this.a = [];
        this.len = 0;
        this.k = k;

        for (let e of a) {
            this.insert(e);
        }
    }

    insert(e) {
        const { a } = this;

        a.push(e);
        this.len++;
        this.heapifyUp();

        if (this.size() > this.k) {
            this.delete();
        }
    }

    delete() {
        const { a } = this;
        if (this.isEmpty()) return null;

        const lastElement = a.pop(); // delete last element
        this.len--;

        a[0] = lastElement;
        this.heapifyDown();

        return lastElement;
    }

    heapifyUp() {
        const { a, len } = this;

        let i = len - 1;
        while (i > 0) {
            let pi = Math.trunc((i - 1) / 2);
            // swap if parent is bigger
            if (a[pi] > a[i]) {
                [a[i], a[pi]] = [a[pi], a[i]];
            }
            i = pi;
        }
    }

    heapifyDown() {
        const { a, len } = this;
        let i = 0;

        while (true) {
            let mini = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;

            if (left < len && a[left] < a[mini]) mini = left;
            if (right < len && a[right] < a[mini]) mini = right;

            if (mini === i) break;

            [a[mini], a[i]] = [a[i], a[mini]];
            i = mini; // go down to small child
        }
    }

    size() {
        return this.len;
    }

    isEmpty() {
        return this.size() === 0;
    }

    top() {
        if (this.isEmpty()) return null;
        return this.a[0];
    }
}

class KthLargest {
    k;
    minh;
    constructor(k, a) {
        this.k = k;
        this.minh = new MinHeap(a, k);
    }
    add(x) {
        this.minh.insert(x);
        return this.minh.top();
    }
}

// // kth (5th) highest
// //      99,98,93,93.5,92*  | ....

