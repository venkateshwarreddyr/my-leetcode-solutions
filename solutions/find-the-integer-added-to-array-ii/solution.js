// Problem: Find the Integer Added to Array II
// LeetCode: https://leetcode.com/problems/find-the-integer-added-to-array-ii/
// Language: javascript
// Runtime: 276 ms
// Memory: 60.3 MB
// Submitted: 2024-04-28

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumAddedInteger = function(nums1, nums2) {
        nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    
    if(nums2.length === 1) {
        return nums2[0] - nums1[2]
    }
    
    let ob = {}
        for(let num2 of nums2) {
    
        let newOb = {}
    for(let num1 of nums1) {
            let diff = num2 - num1
            ob[diff] = ob[diff] || 0
            ob[diff]++
        }
    }
    console.log({nums1, nums2})
    console.log(ob)
    let max_rep = Math.max(...Object.values(ob))
    let an = Infinity
    
    for(let key in ob) {
            let new_nums1 = [...nums1].map(e => e + (+key))
            let cc = 0
            for(let i=0,j=0; i<new_nums1.length && j<nums2.length; ) {
                if(new_nums1[i] === nums2[j]) {
                    i++
                    j++
                    cc++
                } else {
                    i++
                }
            }
            
            if(cc === nums2.length) {
                 an = Math.min(an, Number(key))
            }
    }
    
    return an
    
    
};
