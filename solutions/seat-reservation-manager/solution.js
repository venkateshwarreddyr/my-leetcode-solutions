// Problem: Seat Reservation Manager
// LeetCode: https://leetcode.com/problems/seat-reservation-manager/
// Language: javascript
// Runtime: 187 ms
// Memory: 98.4 MB
// Submitted: 2025-07-23

class MyMinHeap {
    a;
    len;
    constructor(arr = []) {
        this.a = []
        this.len = 0
        for (let x of arr) {
            this.insert(x)
        }
    }
    size() {
        return this.len
    }
    insert(x) {
        let { a, len } = this
        // if (this.len < a.length) a[this.len] = x
        // else a.push(x)
        a.push(x)
        this.len++
        this.siftUp()
    }
    deleteMin() {
        this.extractMin()
    }
    extractMin() {
        let { a, len } = this
        if (len === 0) return
        let x = a[0]
        a[0] = a[len - 1]
        a.pop();
        this.len--
        this.siftDown()
        return x
    }
    findMin() {
        return this.a[0]
    }
    // heapify  up
    siftUp() {
        let { a, len } = this

        // heapify up
        //   while current is smaller than parent, swap
        //      current = current.parent
        //      repeat
        let i = this.len - 1
        let pi = Math.trunc((i - 1) / 2)
        // let cl = console.log
        while (pi >= 0 && pi < i && a[pi] > a[i]) {
            // cl("before", i, pi, a);
            [a[i], a[pi]] = [a[pi], a[i]];
            i = pi;
            pi = Math.trunc((i - 1) / 2)
            // cl("after", i, pi, a);
        }
    }
    // heapify  down
    siftDown() {
        let { a, len } = this

        // heapify down
        //   while current (root) is bigger than l/r, swap with min(l,r)
        //      current = min(l,r)
        //      repeat
        let i = 0
        while (1) {
            let li = 2 * i + 1
            let ri = 2 * i + 2
            let mini = i
            if (li < len && a[li] < a[mini]) mini = li
            if (ri < len && a[ri] < a[mini]) mini = ri
            if (mini === i) break
            [a[i], a[mini]] = [a[mini], a[i]];
            i = mini;
        }
    }
    use() {
        let minh = new MyMinHeap()
        minh.size()
        minh.insert(1)
        minh.findMin()
        let x = minh.extractMin()
        minh.deleteMin() // same as extractMin, no return
    }
}

/**
 * @param {number} n
 */
var SeatManager = function (n) {
    let minh = new MyMinHeap()
    for (let x = 1; x <= n; x++) {
        minh.insert(x)
    }

    SeatManager.prototype.reserve = function () {
        let x = minh.extractMin()
        return x
    };
    SeatManager.prototype.unreserve = function (x) {
        minh.insert(x)
    };
    /** 
     * Your SeatManager object will be instantiated and called as such:
     * var obj = new SeatManager(n)
     * var param_1 = obj.reserve()
     * obj.unreserve(seatNumber)
     */
};

