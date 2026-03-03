// Problem: Construct String With Repeat Limit
// LeetCode: https://leetcode.com/problems/construct-string-with-repeat-limit/
// Language: javascript
// Runtime: 233 ms
// Memory: 65.9 MB
// Submitted: 2022-02-20

/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
    let arr = new Array(26).fill(0)
    for(let c of s){
        arr[c.charCodeAt(0)-97]++
    }
    let s1 = []
    let counter = 0
    for(let i=25;i!=-1;i--){
        if(arr[i])
        {
        // console.log({i, arr})
            counter++
            for(let j=0;j<repeatLimit && arr[i]>0;j++){
                s1.push(String.fromCharCode(i+97))
                arr[i]--
                if(counter > 1){
                    counter=0;
                    i=26;
                    break;
                }
            }
            if(!arr[i]) counter = 0;
             
        }
    }
    console.log()
    return s1.join('')
};

var repeatLimitedString1 = function(s, repeatLimit) {
    if(s.length===1) return s
    s = s.split('').sort().reverse()
    counter = 1;
    prev = s[0];
    let queue = []
    for(let i=1;i<s.length;i++){
        if(prev!==s[i]){ 
            if(queue[0]){
                s.splice(i+1, 0, queue[0])
                queue.shift()
                // i++
            }
            counter=1; 
            prev = s[i]; 
            continue; 
        }
        else if(prev===s[i]) 
        {
            counter++;
            prev = s[i]
            if(counter > repeatLimit){
                // counter--;
                queue.push(s.splice(i, 1))
            }
        }
    }
    console.log({queue, s})
    return s.join('')
};
