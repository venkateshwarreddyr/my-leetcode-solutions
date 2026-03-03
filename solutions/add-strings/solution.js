// Problem: Add Strings
// LeetCode: https://leetcode.com/problems/add-strings/
// Language: javascript
// Runtime: 96 ms
// Memory: 42.3 MB
// Submitted: 2021-08-10

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
        let str = "";
    num1 = num1.split('').map(e => Number(e))
    num2 = num2.split('').map(e => Number(e))
    let p = 0;
    for(let i=num1.length-1, j = num2.length-1; i>=0 || j>=0;i--,j--){
        let ans = (num1[i]||0)+(num2[j]||0) +p;
        if(ans>=10){
            p = Math.floor(ans/10);
            ans = ans%10
        }else{
            p=0
        }
        str=ans+str
    }
    if(p>0) str=p+str
    return str;
};
