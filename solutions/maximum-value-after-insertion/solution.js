// Problem: Maximum Value after Insertion
// LeetCode: https://leetcode.com/problems/maximum-value-after-insertion/
// Language: javascript
// Runtime: 100 ms
// Memory: 47.1 MB
// Submitted: 2021-05-30

/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */
var maxValue = function(newA, x) {
    // let newA = n.split('');
    let arr = []
    let max = 0
    if(newA[0]!='-'){
        max = -1
        for(let i = 0;i<=newA.length;i++){
            if(newA[i]<x){
            return ((newA.slice(0, i) + x + newA.slice(i)))
            // if(xx>max){
            //     max = xx
            // }
        }
           
        }
         return newA+x
    }else{
        max=1
        
         for(let i = 1;i<=newA.length;i++){
             if(newA[i]>x){
            return ((newA.slice(0, i) + x + newA.slice(i)))
            // if(xx<max){
            //     max=xx
            // }
        }
            
        }
         return newA+x
    }
    
    return max;
    // return `${Math.max(...arr)}`;
};
