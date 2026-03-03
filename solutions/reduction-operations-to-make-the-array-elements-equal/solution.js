// Problem: Reduction Operations to Make the Array Elements Equal
// LeetCode: https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/
// Language: javascript
// Runtime: 392 ms
// Memory: 70.7 MB
// Submitted: 2021-06-06

/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
    let newObj = {}
    nums.forEach(num => {
        if(!newObj[num]) newObj[num] = 0;
        newObj[num]++
    })
    let keys = Object.keys(newObj).sort((a,b) => (b-a));
    console.log(keys)
    let ans = 0;
    for(let i=0;i<keys.length-1;i++)// in keys)
    {
        ans+=newObj[keys[i]]
        newObj[keys[i+1]] += newObj[keys[i]]
    }
    return ans;
};
