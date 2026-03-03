// Problem: Remove Outermost Parentheses
// LeetCode: https://leetcode.com/problems/remove-outermost-parentheses/
// Language: javascript
// Runtime: 80 ms
// Memory: 40.8 MB
// Submitted: 2021-07-20

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses1 = function(s) {
    let arr = [];
    let flag = false;
    let stack = []
    for(let i = 0; i<s.length;i++){
        if(s[i] === '(' && flag === false){
            flag = true
            // arr.push('(')
        } else if(s[i] === '(') {stack.push(1); arr.push('(') }
        else if(s[i] === ')' && stack.length) {stack.pop(); arr.push(')')}
        else{
            flag = false;
            // arr.push(')')
        }
    }
    return arr.join('')
};
var removeOuterParentheses = function(s) {
    let dep = 0;
    let arr = ''
    for(let i = 0; i<s.length;i++){
        if(s[i] === '(') {
                    if(dep) arr+=(s[i])   
            dep++; 
        }
        else {
            dep--; 
                       if(dep) arr+=(s[i])    
        }
    }
    return arr
};
