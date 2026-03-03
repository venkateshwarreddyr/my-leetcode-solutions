// Problem: Count Number of Nice Subarrays
// LeetCode: https://leetcode.com/problems/count-number-of-nice-subarrays/
// Language: javascript
// Runtime: 212 ms
// Memory: 56.4 MB
// Submitted: 2023-04-29

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    let sum = 0;
    let v = nums.map(e => e&1);
    let map = {}
    let count = 0;
    for(let i=0;i<v.length;i++){
        sum+=v[i];
        
        if(sum===k) count++;
        
        if(map[sum-k]){
            count+=map[sum-k]
        }
       
        map[sum] = (map[sum] || 0)+1
    }
    
    
    return count;
};

