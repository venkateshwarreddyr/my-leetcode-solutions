// Problem: Event Emitter
// LeetCode: https://leetcode.com/problems/event-emitter/
// Language: javascript
// Runtime: 61 ms
// Memory: 41.9 MB
// Submitted: 2023-07-25

class EventEmitter {
    ob = {}

    subscribe(event, cb) {
        this.ob[event] = this.ob[event] || []
        let currInd = this.ob[event].length
        this.ob[event].push(cb)
        return {
            unsubscribe: () => {
                this.ob[event].splice(currInd, 1)
            }
        };
    }

    emit(event, args = []) {
        if (this.ob[event])
            return this.ob[event].map((cb) => cb(...args))
        return []
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
