// Problem: Array With Elements Not Equal to Average of Neighbors
// LeetCode: https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/
// Language: javascript
// Runtime: 344 ms
// Memory: 81.8 MB
// Submitted: 2021-08-16

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
//     let pq = new PriorityQueueMaxHeap();
//     for(let i =0;i<nums.length; i++){
//         pq.enqueue(nums[i]);
//     }
//     let newArr = [pq.dequeue(),pq.dequeue()]
//     while(!pq.isEmpty()){
        
//     }
    // nums = nums.sort();
    for(let i =1;i<nums.length-1;i++){
        
        if(nums[i] === (nums[i+1]+nums[i-1])/2){
            let swap = nums[i];
            nums[i] = nums[i+1]
            nums[i+1] = swap;
        }
    }
    for(let i =1;i<nums.length-1;i++){
        
        if(nums[i] === (nums[i+1]+nums[i-1])/2){
            let swap = nums[i];
            nums[i] = nums[i-1]
            nums[i-1] = swap;
        }
    }
    return nums
};
