// Problem: Design HashSet
// LeetCode: https://leetcode.com/problems/design-hashset/
// Language: javascript
// Runtime: 24 ms
// Memory: 68.8 MB
// Submitted: 2025-07-26

class MyHashSet {
    a;
    constructor() {
        this.n = 10_000
        this.a = new Array(this.n)
    }
    #hash(key) {
        return key % this.n
    }
    add(key) {
        let bi = this.#hash(key)
        if (!this.a[bi]) this.a[bi] = []
        this.a[bi].push(key)
    };
    remove(key) {
        let bi = this.#hash(key)
        if (!this.a[bi]) return
        let arr = this.a[bi]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === key) arr[i] = Infinity
        }
    };
    contains(key) {
        let bi = this.#hash(key)
        if (!this.a[bi]) return false
        let arr = this.a[bi]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === key) return true
        }
        return false
    };
};

