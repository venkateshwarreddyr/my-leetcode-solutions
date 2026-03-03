// Problem: Find the Prefix Common Array of Two Arrays
// LeetCode: https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/
// Language: javascript
// Runtime: 186 ms
// Memory: 49.5 MB
// Submitted: 2023-04-29

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let arr = [];
    for(let i=0;i<A.length;i++){
        let setA = new Set();
        let setB = new Set();
        for(let j=0;j<=i;j++){
            setA.add(A[j]);
            setB.add(B[j]);
        }
        let count = 0;
        for(let j=0;j<=i;j++){
            if(setA.has(B[j])){
                count++;
            }
            if(setB.has(A[j])){
                count++;
            }
        }
        
        arr.push(count/2);
    }
    
    return arr;
};
