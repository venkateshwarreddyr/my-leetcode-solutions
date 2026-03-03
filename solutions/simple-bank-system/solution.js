// Problem: Simple Bank System
// LeetCode: https://leetcode.com/problems/simple-bank-system/
// Language: javascript
// Runtime: 38 ms
// Memory: 90.7 MB
// Submitted: 2025-10-26

/**
 * @param {number[]} balance
 */
var Bank = function(balance) {
    this.bank = [-1, ...balance];
};

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {

    bank = this.bank;
    if(bank.length<=account1) return false
    if(bank.length<=account2) return false
    // if(account1 === 3699 && account2 === 1787){
    //     console.log({account1, account2, money}, bank[account1], bank[account2], bank[account1]>=money, bank[account2]>=money)
    // }
    if(this.withdraw(account1, money))
       {
            return this.deposit(account2, money)
       }
    return false
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
     bank = this.bank;
    if(bank.length<=account) return false
    bank[account] += money
    return true
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
     bank = this.bank;
    if(bank.length<=account) return false
    if(bank[account]>=money)
       { bank[account]-=money;
       return true}
    return false
};

/** 
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
