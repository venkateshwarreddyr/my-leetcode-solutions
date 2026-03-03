// Problem: Product of the Last K Numbers
// LeetCode: https://leetcode.com/problems/product-of-the-last-k-numbers/
// Language: javascript
// Runtime: 45 ms
// Memory: 86.1 MB
// Submitted: 2025-11-15

class ProductOfNumbers {
    constructor() {
        this.a = [1];
    }

    add(num) {
        if (num === 0) {
            this.a = [1];
        } else {
            this.a.push(this.a.at(-1) * num);
        }
    }

    getProduct(k) {
        if (k >= this.a.length) return 0;
        const n = this.a.length;
        return this.a.at(-1) / this.a.at(-k - 1);
    }
}


