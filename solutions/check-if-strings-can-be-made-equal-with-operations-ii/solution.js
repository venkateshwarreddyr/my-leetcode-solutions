// Problem: Check if Strings Can be Made Equal With Operations II
// LeetCode: https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/
// Language: javascript
// Runtime: 152 ms
// Memory: 52.1 MB
// Submitted: 2023-09-02

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function(s1, s2) {
    let even = {}
    let odd = {}
    let n = s1.length
    for(let i=0;i<n;i++){
        if(i%2===0){
           even[s1[i]] = even[s1[i]] || 0
            even[s1[i]]++
            even[s2[i]] = even[s2[i]] || 0
            even[s2[i]]--
        } else {
              odd[s1[i]] = odd[s1[i]] || 0
            odd[s1[i]]++
            odd[s2[i]] = odd[s2[i]] || 0
            odd[s2[i]]--
       }
    }
    for(let e of Object.values(even)){
        if(e!==0) return false
    }
        for(let e of Object.values(odd)){
        if(e!==0) return false
    }
    return true
};
