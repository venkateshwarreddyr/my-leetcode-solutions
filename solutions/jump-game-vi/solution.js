// Problem: Jump Game VI
// LeetCode: https://leetcode.com/problems/jump-game-vi/
// Language: javascript
// Runtime: 56 ms
// Memory: 73.7 MB
// Submitted: 2025-12-12

const cl = console.log

class ObjectDeque {
    map = new Map()
    head = 0 // delete at head, then head++ --- head--, insert at head
    tail = 0 // insert at tail, then tail++ --- tail--, then delete at tail
    unshift(val) {
        let { map, head, tail } = this
        this.head--
        map.set(this.head, val)
    }
    shift() {
        if (this.isEmpty()) return
        let { map, head, tail } = this
        let val = map.get(head)
        map.delete(head)
        this.head++
        return val
    }
    push(val) {
        let { map, head, tail } = this
        map.set(tail, val)
        this.tail++
    }
    pop() {
        if (this.isEmpty()) return
        let { map, head, tail } = this
        this.tail--
        let val = map.get(this.tail)
        map.delete(this.tail)
        return val
    }
    reset() {
        let { map, head, tail } = this
        if (this.isEmpty()) {
            this.tail = this.head = 0
        }
    }
    front() {
        let { map, head, tail } = this
        return map.get(head)
    }
    rear() {
        let { map, head, tail } = this
        return map.get(tail - 1)
    }
    isEmpty() {
        let { map, head, tail } = this
        return tail === head
    }
    get size() {
        let { map, head, tail } = this
        return tail - head
    }
}

var maxResult = function (a, k) {
    let n = a.length

    // save  max biggest sum  on tree top / pq front
    let mddq = new ObjectDeque()

    let lastDp = a[0]
    mddq.push([lastDp, 0])
    // cl({ mddq })
    for (let i = 1; i < n; i++) {
        // while   prev biggest sum  is out of k window  , remove from mddq
        while (mddq.front()[1] < i - k) {
            mddq.shift()
        }

        // calc & remember   current max biggest sum, add to mddq
        // 1st ele is always biggest in mon dec mddq
        lastDp = mddq.front()[0] + a[i]
        // maintain mdq \
        while (mddq.size && mddq.rear()[0] <= lastDp) {
            mddq.pop()
        }
        mddq.push([lastDp, i])
    }

    // return   previous max biggest sum
    return lastDp
};

var maxResult4444444 = function (a, k) {
    let n = a.length

    // save  max biggest sum  on tree top / pq front
    let mdq = []

    let lastDp = a[0]
    mdq.push([lastDp, 0])
    // cl({ mdq })
    for (let i = 1; i < n; i++) {
        // while   prev biggest sum  is out of k window  , remove from mdq
        while (mdq[0][1] < i - k) {
            mdq.shift()
        }

        // calc & remember   current max biggest sum, add to mdq
        // 1st ele is always biggest in mon dec mdq
        lastDp = mdq[0][0] + a[i]
        // maintain mdq \
        while (mdq.length && mdq.at(-1)[0] <= lastDp) {
            mdq.pop()
        }
        mdq.push([lastDp, i])
    }

    // return   previous max biggest sum
    return lastDp
};

var maxResult33333 = function (a, k) {
    let n = a.length

    // save  max biggest sum  on tree top / pq front
    let pq = new PriorityQueue((a, b) => b[0] - a[0]) // || a[1] - b[1])

    let lastDp = a[0]
    pq.enqueue([lastDp, 0])
    for (let i = 1; i < n; i++) {
        // while   prev biggest sum  is out of k window  , remove from pq
        while (pq.front()[1] < i - k) {
            pq.pop()
        }

        // calc & remember   current max biggest sum, add to pq
        lastDp = pq.front()[0] + a[i]
        pq.enqueue([lastDp, i])
    }

    // return   previous max biggest sum
    return lastDp
};

var maxResult22222 = function (a, k) {
    const upperBound = (arr, target, left = 0, right = arr.length) => {
        while (left < right) {
            const mid = (left + right) >> 1;
            arr[mid][0] <= target[0] ? (left = mid + 1) : (right = mid);
        }
        return left;
    };

    let n = a.length
    let dp = new Array(n)
    let stack = []
    // let pqLen = 0

    dp[0] = a[0]
    stack.push([dp[0], 0])
    // stack[0] = [dp[0], 0]
    // pqLen++

    for (let i = 1; i < n; i++) {
        // let [maxPrevDp, j] = stack.at(-1)
        // while (stack[pqLen - 1][1] < i - k) {
        while (stack.at(-1)[1] < i - k) {
            stack.pop()
            // pqLen--
        }

        dp[i] = stack.at(-1)[0] + a[i]
        // dp[i] = stack[pqLen - 1][0] + a[i]

        let eleToInsert = [dp[i], i]
        let insertIndex = upperBound(stack, eleToInsert, 0, stack.length) // pqLen)
        // pqLen++
        stack.push(null)
        for (let t = stack.length /* pqLen*/ - 2; t >= insertIndex; t--) {
            stack[t + 1] = stack[t]
        }

        stack[insertIndex] = eleToInsert
    }

    return dp[n - 1]
};

