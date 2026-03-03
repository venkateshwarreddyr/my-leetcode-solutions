// Problem: Insert Delete GetRandom O(1)
// LeetCode: https://leetcode.com/problems/insert-delete-getrandom-o1/
// Language: javascript
// Runtime: 83 ms
// Memory: 106 MB
// Submitted: 2026-01-01

class RandomizedSet {
    a = [];
    indexMap = new Map(); // element -> index map

    insert(e) {
        let { a, indexMap } = this
        if (indexMap.has(e)) return false;

        a.push(e);
        indexMap.set(e, a.length - 1);
        return true;
    };

    remove(e) {
        let { a, indexMap } = this
        if (!indexMap.has(e)) return false;

        let i = indexMap.get(e);
        let lastIndex = a.length - 1;

        [a[lastIndex], a[i]] = [a[i], a[lastIndex]]; // interchange i with last
        indexMap.set(a[i], i); // update last (now at i)  to  i index

        indexMap.delete(a[lastIndex]); // delete last from map
        a.pop(); // delete last from array

        return true;
    };

    getRandom() {
        let { a, indexMap } = this
        return a[Math.floor(Math.random() * a.length)];
    };
};
