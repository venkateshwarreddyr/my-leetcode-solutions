// Problem: Find Unique Binary String
// LeetCode: https://leetcode.com/problems/find-unique-binary-string/
// Language: javascript
// Runtime: 68 ms
// Memory: 42.2 MB
// Submitted: 2023-11-16

/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    nums = nums.map(e => parseInt( e, 2 ));
    max = parseInt(new Array(nums.length).fill(1).join(''), 2);
    // let ans;
    for(let i=0;i<=max;i++){
        if(!nums.includes(i)){
           let ans = i.toString(2);
            for(let j=0;j<nums.length;i++){
            if(ans.length === nums.length) return ans;
                ans = '0'+ans
            }
        }
    }
};
