// Problem: Apply Discount Every n Orders
// LeetCode: https://leetcode.com/problems/apply-discount-every-n-orders/
// Language: javascript
// Runtime: 7 ms
// Memory: 64.8 MB
// Submitted: 2025-11-20

/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function (n, discount, products, prices) {
    let counter = 0
    let prod_map_price = {}

    for (let i = 0; i < products.length; i++) {
        prod_map_price[products[i]] = prices[i]
    }

    Cashier.prototype.getBill = function (product, amount) {
        let total = 0
        counter++
        for (let i = 0; i < product.length; i++) {
            total += prod_map_price[product[i]] * amount[i]
        }
        if (counter % n === 0) {
            return total * (100 - discount) / 100
        }
        return total
    };
};


/** 
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */
