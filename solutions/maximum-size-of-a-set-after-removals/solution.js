// Problem: Maximum Size of a Set After Removals
// LeetCode: https://leetcode.com/problems/maximum-size-of-a-set-after-removals/
// Language: javascript
// Runtime: 110 ms
// Memory: 65.8 MB
// Submitted: 2024-04-16

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumSetSize = function(a, b) {
    let n = a.length

    let seta = new Set(a);
    let setb = new Set(b);

    if(seta.size < setb.size) {
        let temp = seta;
        seta = setb
        setb = temp
    }

    let cca = seta.size
    let ccb = setb.size
    
    for(let e of seta) {
        if(setb.has(e)) {
            if(cca >= ccb) {
                cca--
            } else {
                ccb--
            }
        }
    }

    return Math.min(n/2, cca) +  Math.min(n/2, ccb)
    
};
