// Problem: Number of Recent Calls
// LeetCode: https://leetcode.com/problems/number-of-recent-calls/
// Language: javascript
// Runtime: 52 ms
// Memory: 71.3 MB
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
            if (a[pi] <= a[i]) break; // parent is smaller, stop

            [a[i], a[pi]] = [a[pi], a[i]];
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

class RecentCounter {
    time_frame_period;
    h;
    constructor() {
        this.time_frame_period = 3000
        this.h = new MinHeap()
    }
    ping(inc_t_in_ms) {
        this.h.insert(inc_t_in_ms)
        while (this.h.top() <
                 (inc_t_in_ms - this.time_frame_period)) {
            this.h.delete()
        }
        return this.h.size()
    };
};

