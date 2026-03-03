// Problem: Calculate Amount Paid in Taxes
// LeetCode: https://leetcode.com/problems/calculate-amount-paid-in-taxes/
// Language: javascript
// Runtime: 66 ms
// Memory: 44.7 MB
// Submitted: 2023-05-25

cl = console.log
var calculateTax = function (brackets, income) {
    let an = 0
    let lower = 0
    for (let [upper, percent] of brackets) {
        let amount = upper - lower;
        if (income > amount) {
            an += (amount * percent / 100);
            income -= amount
            lower = upper
        } else {
            an += (income * percent / 100);
            break;
        }
    }

    return an
};
