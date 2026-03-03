// Problem: Find Anagram Mappings
// LeetCode: https://leetcode.com/problems/find-anagram-mappings/
// Language: javascript
// Runtime: 49 ms
// Memory: 48.9 MB
// Submitted: 2024-04-29

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var anagramMappings = function(nums1, nums2) {
    let n = nums1.length
    let an = new Array(n).fill(-1)
    
    for(let i=0;i<n;i++) {
        for(let j=0;j<n;j++) {
            if(nums2[i] === nums1[j] && an[j] === -1) {
                an[j] = i
            }
        }
    }

    return an
};
