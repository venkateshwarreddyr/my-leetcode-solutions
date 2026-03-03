// Problem: Total Hamming Distance
// LeetCode: https://leetcode.com/problems/total-hamming-distance/
// Language: javascript
// Runtime: 168 ms
// Memory: 41.4 MB
// Submitted: 2021-05-31

/**
 * @param {number[]} nums
 * @return {number}
 */
var hammingDistance = function(x, y) {
    
    let diff = 0;
    while(x!=0 || y !=0){
        if((x%2) != (y%2)) diff++;

        x=Math.floor(x/2);
        y=Math.floor(y/2);
    }
    return diff;

};

var totalHammingDistance = function(nums) {
    let summ = 0;
    // for(let i = 0; i<nums.length; i++){
    //     nums[i] = nums[i].toString(2).split('');
    // }
    for(let j = 0; j<32; j++){
        let ones = 0;
        let zeros = 0;
        for(let i = 0; i<nums.length; i++){
            if((nums[i] >> j)&1 === 1){
                ones++
            }
        }
        summ+=(ones*(nums.length - ones))
        
        
//         for(let j=i+1;j<nums.length;j++){
            
            
            
//             // summ+=(nums[i]^nums[j]).toString(2).replace(/0/g, '').length;
//             // summ+=hammingDistance(nums[i],nums[j])
//         }
    }
    return summ;
};
