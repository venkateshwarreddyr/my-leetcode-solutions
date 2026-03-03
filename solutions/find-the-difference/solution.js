// Problem: Find the Difference
// LeetCode: https://leetcode.com/problems/find-the-difference/
// Language: javascript
// Runtime: 48 ms
// Memory: 42.3 MB
// Submitted: 2023-09-25

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // s  = s.split('').sort()
    // t  = t.split('').sort()
    // console.log({s,t})
    let charcodeS=0;
    let charcodeT=0;
    for(let i = 0;i<s.length; i++){
        // if(objs[s[i]]===undefined) objs[s[i]] = 0
        // if(objs[t[i]]===undefined) objs[t[i]] = 0
        charcodeS += s.charCodeAt(i);
        charcodeT += t.charCodeAt(i);
    }
    charcodeT += t.charCodeAt(s.length);
    // for(let key of Object.keys(objs)){
    //     if(objs[key]===-1){
    //         return key;
    //     }
    // }
    return String.fromCharCode(charcodeT-charcodeS);
};
