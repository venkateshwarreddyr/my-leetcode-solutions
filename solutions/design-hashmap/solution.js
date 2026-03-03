// Problem: Design HashMap
// LeetCode: https://leetcode.com/problems/design-hashmap/
// Language: javascript
// Runtime: 25 ms
// Memory: 68.5 MB
// Submitted: 2025-07-26

class MyHashMap {
    a;
    constructor() {
        this.n = 100
        this.a = new Array(this.n)
    }
    #hash(key) {
        return key % this.n
    }
    put(key, value) {
        let bi = this.#hash(key)
        if (!this.a[bi]) this.a[bi] = []
        let ai = (key - bi) / this.n
        this.a[bi][ai] = value
        // if (ai < this.a[bi].length) {
        //     this.a[bi][ai] = value
        // } else {
        //     let twopowerGtAi = 2 ** Math.ceil(Math.log2(ai + 1))
        //     let newa = new Array(twopowerGtAi)
        //     for (let i = 0; i < this.a[bi].length; i++) {
        //         newa[i] = this.a[bi][i]
        //     }
        //     this.a[bi] = newa
        //     this.a[bi][ai] = value
        // }
    };
    remove(key) {
        let bi = this.#hash(key)
        if (!this.a[bi]) return
        let ai = (key - bi) / this.n
        this.a[bi][ai] = -1
    };
    get(key) {
        let bi = this.#hash(key)
        if (!this.a[bi]) return -1
        let arr = this.a[bi]
        let ai = (key - bi) / this.n
        return this.a[bi][ai] ?? -1
    };
};

