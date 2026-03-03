// Problem: Finding 3-Digit Even Numbers
// LeetCode: https://leetcode.com/problems/finding-3-digit-even-numbers/
// Language: javascript
// Runtime: 3218 ms
// Memory: 119.2 MB
// Submitted: 2021-12-05

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let arr = []
    digits.forEach((i, ind)=>{
        
    
        digits.forEach((j, jnd)=>{
            
            if(ind!=jnd)
          digits.forEach((k, knd)=>{
              
            if(knd!=jnd && knd!=ind){
             
                let num = `${i}${j}${k}`;
                num = Number(num);
                if(num.toString().length === 3){
                    if(num%2 === 0){
                        arr.push(num)
                    }
                }   
            }
            })
        })
        
    })
    let x = [...(new Set(arr))].sort((a,b) => a-b)
    return x
};
