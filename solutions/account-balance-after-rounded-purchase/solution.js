// Problem: Account Balance After Rounded Purchase
// LeetCode: https://leetcode.com/problems/account-balance-after-rounded-purchase/
// Language: javascript
// Runtime: 54 ms
// Memory: 41.9 MB
// Submitted: 2023-08-05

/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function(num) {
    let x = num%10
    if(x>=5){
        return 100 - (num + 10 - x)
    }
    
    return 100 - (num - x)
};
