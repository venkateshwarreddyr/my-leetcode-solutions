// Problem: Distribute Money to Maximum Children
// LeetCode: https://leetcode.com/problems/distribute-money-to-maximum-children/
// Language: javascript
// Runtime: 100 ms
// Memory: 46.6 MB
// Submitted: 2023-05-23

/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function(money, children) {
    if(money<children) return -1;
    if(money>8*children) return children-1;
    
    let ans = 0;
    
    while(money>0 && money - 8 >= children - 1){
        ans++; money -= 8; children--;
    }
    
    if(money == 4 && children == 1) ans--;
    
    return ans;
    
    
};
