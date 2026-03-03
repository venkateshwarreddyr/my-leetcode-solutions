// Problem: LRU Cache
// LeetCode: https://leetcode.com/problems/lru-cache/
// Language: javascript
// Runtime: 107 ms
// Memory: 106.7 MB
// Submitted: 2025-12-30

class LRUCache {
    capacity;
    map;

    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }
    get(key) {
        if (!this.map.has(key)) return -1;
        // move the accessed key to end of recents queue
        let v = this.map.get(key);
        this.map.delete(key); // delete from array
        this.map.set(key, v); // push to end
        return v;
    }

    put(key, value) {
        if (!this.capacity) return; // no capacity allocated, can't hold values

        // existing key
        if (this.map.has(key)) {
            // update key
            // move the set key to end of recents queue
            this.map.delete(key); //  delete from array
            this.map.set(key, value); //  push to end
            return;
        }

        // new key
        // capacity is full - delete 1st element
        if (this.map.size === this.capacity) {
            let firstKey = this.map.keys().next().value;
            this.map.delete(firstKey); //		delete 1st element
        }
        // new key, add
        this.map.set(key, value);
    }
}

