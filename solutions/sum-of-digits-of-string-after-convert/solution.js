// Problem: Sum of Digits of String After Convert
// LeetCode: https://leetcode.com/problems/sum-of-digits-of-string-after-convert/
// Language: javascript
// Runtime: 132 ms
// Memory: 40.3 MB
// Submitted: 2021-07-25

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let sum = '';
    let sumval =0;
    
    s = s.split('').map(e => ((e.charCodeAt(0)-'a'.charCodeAt(0))+1)).join('');
    // for(let i=0; i< s.length;i++){
    //     sum+=((s.charCodeAt(i)-'a'.charCodeAt(0))+1)
    // };
    while(k!=0){
    // console.log(s)
        s = s.split('').reduce((a, c) => {return a + Number(c)}, 0).toString()
//         for(let i=0; i< sum.length;i++){
//         sumval+=Number(sum[i]);
       
//     };
        // sum = sumval.toString();
         k--
    }
    return s;
};
