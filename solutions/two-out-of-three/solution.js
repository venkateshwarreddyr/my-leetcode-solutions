// Problem: Two Out of Three
// LeetCode: https://leetcode.com/problems/two-out-of-three/
// Language: javascript
// Runtime: 190 ms
// Memory: 46.6 MB
// Submitted: 2021-10-10

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    nums1 = [...new Set(nums1)];
    
    nums2 = [...new Set(nums2)];
    
    nums3 = [...new Set(nums3)];
    
    obj = {}
    // console.log({nums1, nums2, nums3})
    // [...nums1, ...nums2,...nums3].forEach(e =>{
    //     if(obj[e])
    //     obj[e] = obj[e]++
    //     else
    //         obj[e] = 1
    // })
    nums1.forEach(e =>{
        if(obj[e])
        obj[e]++
        else
            obj[e] = 1
    })
     nums2.forEach(e =>{
        if(obj[e])
        obj[e]++
        else
            obj[e] = 1
    })
     nums3.forEach(e =>{
        if(obj[e])
        obj[e]++
        else
            obj[e] = 1
    })
    arr = []
    console.log(obj)
    Object.keys(obj).forEach(e =>{
        if(obj[e]>1){
            arr.push(e)
        }
    })
    return arr;
};
